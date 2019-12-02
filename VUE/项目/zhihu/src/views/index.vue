<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
          <div>叟页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/vip">
          <i class="iconfont icon-huiyuan"></i>
          <div>费员</div>
        </router-link>
      </div>
      <div>
        <i class="iconfont icon-plus big" @click="show"></i>
      </div>
      <div>
        <router-link to="/notify">
          <i class="iconfont icon-tongzhi2-copy" ></i>
          <div>通资</div>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i class="iconfont icon-wode"></i>
          <div>{{loginState ? '我的':'未登录'}}</div>
        </router-link>
      </div>
    </nav>
    <my-dialog :isshow="flag" @close="close">
    
    </my-dialog>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
import dialog from "@/components/dialog.vue";
export default {
  name: "index",
  data() {
    return {
      flag: false
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      // this.$router.push('/login')
    }
  },
  methods: {
    show() {
      this.flag = true;
    },
    close() {
      this.flag = false;
    },
  },
  computed: {
    ...mapState(["loginState"])
  },
  components: {
    "my-dialog": dialog
  }
};
</script>
<style lang="less" scoped>
// 只对当前模板起作用scoped
.mainPage > div:nth-child(1) {
  padding-bottom: 18vw;
}
nav {
  user-select: none;
  background: #fff;
  a {
    text-decoration: none;
    color: black;
    i {
      font-size: 6vw;
    }
  }
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
    text-align: center;
    .big {
      font-size: 26px;
      color: plum;
    }
    a.router-link-active {
      color: rgb(64, 150, 190);
    }
  }
}
</style>