<template>
  <el-form class="myform" ref="form" :rules="rules" :model="form" label-width="80px">
    <el-form-item label="部门名称" prop="name">
      <el-input v-model.trim="form.name" style="width:350px"></el-input>
    </el-form-item>
    <el-form-item label="部门描述" prop="desc">
      <el-input type="textarea" rows="7" v-model.trim="form.desc" style="width:350px"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="$router.back()">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
// @ is an alias to /src
import { addDpList ,updateDpList} from "@/api/index.js";

export default {
  name: "add",
  data() {
    return {
      form: {
        name: "",
        desc: ""
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
    let obj = this.$store.state.departmentList.filter(
      item => item.id == this.$route.query.id
    )[0];
    this.form = obj ? obj : this.form;
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$refs.form.validate(flag => {
        //   flag为true 的时候才代表刚才的验证规则都通过了。
        if (flag) {
          let id=this.$route.query.id;
          this.form.departmentId=id;//这个是后台要的参数
          (id?updateDpList:addDpList)(this.form).then(data => {
            if (data.code == 0) {
              //   新增成功的话，就弹出提示
              this.$confirm((id?"更新":"添加")+"成功！", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              }).then(
                () => {
                  //   router 放方法，route 放属性
                  this.$router.push("/org/department");
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
  components: {}
};
</script>
<style lang="less">
.myform {
  text-align: left;
  padding: 20px;
  height: 100%;
}
</style>