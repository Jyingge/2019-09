<template>
 <el-form :model="ruleForm" :rules="rules" align="left" ref="ruleForm"
  label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="性别" prop="sex">
    <el-radio-group v-model="ruleForm.sex">
      <el-radio label="0">男</el-radio>
      <el-radio label="1">女</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="部门" prop="departmentId">
    <el-select v-model="ruleForm.departmentId" placeholder="请选择所在部门">
      <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id+''"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="职务" >
    <el-select v-model="ruleForm.jobId" placeholder="请选择所处职务">
      <el-option v-for="item in jobOptions" :key="item.id" :label="item.name" :value="item.id+''"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="自我介绍" prop="desc" >
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm">立即创建</el-button>
       <el-button @click="$router.back()">取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import { addUserList, updateUserList } from "@/api/index.js";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        sex: "",
        email: "",
        departmentId: "",
        jobId: "",
        desc: "",
        phone: ""
      },
      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          jobId: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
  
  },
  created() {
    let id = this.$route.query.id;
    let obj = this.$store.state.userList.filter(item => {
      return item.id == id;
    })[0];
    this.ruleForm = obj ? obj : this.ruleForm;
    this.ruleForm.jobId+='';
  },
  computed: {
    options() {
      return this.$store.state.departmentList;
    },
    jobOptions() {
      return this.$store.state.jobList;
    }
  },
  methods: {
    submitForm() {
      console.log("submit!");
      this.$refs.ruleForm.validate(flag => {
        //   flag为true 的时候才代表刚才的验证规则都通过了。
        if (flag) {
          let id = this.$route.query.id;
          this.ruleForm.userId = id; //这个是后台要的参数
          (id ? updateUserList : addUserList)(this.ruleForm).then(data => {
            if (data.code == 0) {
              //   新增成功的话，就弹出提示
              this.$confirm((id ? "更新" : "添加") + "成功！", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              }).then(
                () => {
                  //   router 放方法，route 放属性
                  this.$router.push("/org/user");
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
  }
};
</script>
