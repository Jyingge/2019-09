<template>
  <div>
    <header>
      <input type="text" >
      <span class="iconfont icon-saomiao"></span>
      <span @click="change" class="iconfont icon-shezhi"> {{loginState?'退出':'登录'}} </span>
    </header>
    <in v-if="loginState"></in>
    <no-in v-else></no-in>
  </div>
</template>
<script>
import { mapState } from "vuex";
import In from "./in.vue";
import NoIn from "./noIn.vue";

// @ is an alias to /src
export default {
  name: "user",
  data() {
    return {};
  },
  components: {
    //   In,NoIn
    in: In,
    "no-in": NoIn
  },
  computed: {
    ...mapState(["loginState"])
  },
  methods: {
    change() {
      if (this.loginState) {
        // 当前是登录状态，我们就要进行退出操作...
        localStorage.removeItem("token");
        this.$store.commit("stateChange", { loginState: false });
      } else {
        // 否则相反...
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="less">
header{
  .iconfont{
    font-size: 7vw;
  }
}
</style>