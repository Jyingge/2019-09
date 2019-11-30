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
        <i class="iconfont icon-plus big"></i>
      </div>
      <div>
        <router-link to="/notify">
          <i class="iconfont icon-tongzhi2-copy"></i>
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
  </div>
</template>
<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  name: "index",
  data() {
    return {};
  },
  computed: {
    ...mapState(["loginState"])
  },
  components: {}
};
</script>
<style lang="less" scoped>
// 只对当前模板起作用scoped
nav {
  user-select: none;
  a {
    text-decoration: none;
    color: rgb(64, 150, 190);
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
      color: pink;
    }
  }
}
</style>