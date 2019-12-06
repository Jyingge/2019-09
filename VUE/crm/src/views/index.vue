<template>
  <div>
    <el-container>
      <el-header class="cl">
        <h2 class="lt">CRM管理系统</h2>
        <div class="topTabBox lt">
          <div class="lt">
            <router-link to="/org" tag="span">组织结构</router-link>
          </div>
          <div class="lt">
            <router-link to="/crm" tag="span">客户管理</router-link>
          </div>
        </div>
        <div class="userNameBox rt">
          <span>您好，王峰</span>
          <span @click="logout">安全撤退</span>
        </div>
      </el-header>
      <div class="middle_content-box">
          <router-view></router-view>
      </div>
      
      <el-footer class="footer_botton">Footer</el-footer>
    </el-container>

    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src

// 做验证判断，看他是否登录，有啥权限
import { judgeLogin } from "@/api/index.js";
import { signout } from "@/api/login";
export default {
  name: "index",
  data() {
    return {};
  },
  created() {
    judgeLogin().then(flag=>{
        //   如果flag是false  代表登录状态是失败的，直接跳转到登录页
          if (!flag) {
              this.$router.push('/login')
          }
      })
  },
  methods: {
    logout(){
      signout().then(data=>{
        if (data.code==0) {
          this.$router.push('/login')
        }
      })
    }
  },
  components: {}
};
</script>

<style lang="less">
.footer_botton{
    position: absolute;bottom: 0;width: 100%;left: 0;
}
.middle_content-box{
    position: absolute;bottom: 60px;top: 60px;width: 100%;left: 0;right: 0;overflow: hidden;
    .el-container{
        height: 100%;
    }
}
.topTabBox {
  padding: 0 60px;
  > div {
    margin: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
      color: #909399;
      &::after {
        content: "";
        display: block;
        width: 100%;
        position: relative;
        border-bottom: 2px solid #909399;
        top: -4px;
      }
    }
    > span {
      display: block;
      width: 100%;
      height: 100%;
    }
    > span.router-link-active {
      font-size: 24px;
      font-weight: 500;
      color: #909399;
    }
  }
}
.userNameBox {
  > span:nth-child(2) {
    cursor: pointer;
    padding-left: 30px;
  }
}
.el-header,
.el-footer {
  background-color: rgb(172, 217, 235);
  color: #444;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(205, 234, 245);
  color: #222;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>