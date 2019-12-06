<template>
  <el-form class="myform" ref="form" :rules="rules" :model="form" label-width="80px">
    <el-form-item label="职务名称" prop="name">
      <el-input v-model.trim="form.name" style="width:350px"></el-input>
    </el-form-item>
    <el-form-item label="职务描述" prop="desc">
      <el-input type="textarea" rows="7" v-model.trim="form.desc" style="width:350px"></el-input>
    </el-form-item>
    <el-form-item label="职务权限" prop="power">
      <el-checkbox-group v-model="power">
        <el-checkbox v-for="item in data" :key="item.id" :label="item.name"></el-checkbox>
        <!-- <el-checkbox label="userhandle">员工操作权</el-checkbox>
        <el-checkbox label="departhandle">部门操作权</el-checkbox>
        <el-checkbox label="jobhandle">职务操作权</el-checkbox>
        <el-checkbox label="departcustomer">部门全部客户</el-checkbox>
        <el-checkbox label="allcustomer">公司全部客户</el-checkbox>
        <el-checkbox label="resetpassword">重置密码</el-checkbox>-->
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="$router.back()">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
// userhandle|departhandle|jobhandle|departcustomer|allcustomer|resetpassword
// @ is an alias to /src
import { updateJobList, addJobList } from "@/api/index.js";
export default {
  name: "add",
  data() {
    return {
      data: [
        {
          name: "员工操作权",
          id: Math.random()
        },
        {
          name: "部门操作权",
          id: Math.random()
        },
        {
          name: "职务操作权",
          id: Math.random()
        },
        {
          name: "部门全部客户",
          id: Math.random()
        },
        {
          name: "公司全部客户",
          id: Math.random()
        },
        {
          name: "重置密码",
          id: Math.random()
        }
      ],
      form: {
        name: "",
        desc: "",
        power: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  created() {
    let id = this.$route.query.id;
    let obj = this.$store.state.jobList.filter(item => {
      return item.id == id;
    })[0];
    this.form = obj ? obj : this.form;
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(flag => {
        //   flag为true 的时候才代表刚才的验证规则都通过了。
        if (flag) {
          let id = this.$route.query.id;
          this.form.jobId = id; //这个是后台要的参数
          (id ? updateJobList : addJobList)(this.form).then(data => {
            if (data.code == 0) {
              //   新增成功的话，就弹出提示
              this.$confirm((id ? "更新" : "添加") + "成功！", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              }).then(
                () => {
                  //   router 放方法，route 放属性
                  this.$router.push("/org/job");
                },
                () => {}
              );
            } else {
              this.$message.error("抱歉，添加失败了，请重试！");
            }
          });
        }
      });
      return;
    }
  },
  computed: {
    power: {
      get() {
        return this.form.power.split("|");
      },
      set(val) {
        this.form.power = val.join("|");
      }
    }
  },
  components: {}
};
</script>
<style lang="less">
</style>