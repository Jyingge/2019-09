<template>
  <el-aside width="200px" style="background:#cdeaf5; overflow: hidden;">
    <div class="asicBox">
      <el-row class="tac">
        <el-col>
          <!-- :router="true" -->
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <!-- v-if="power.indexOf(item[0].meta.power)!=-1" -->
            <el-submenu v-for="(item,index) in menuList" :index="index+''" :key="index">
              <template slot="title">
                <i :class="item[0].meta.icon"></i>
                <span>{{item[0].meta.rootTil}}</span>
              </template>
              <!--  :route="{path:v.path}" -->
              <router-link :to="v.path" v-for="(v,i) in item" :key="index+'-'+i" tag="span">
                <el-menu-item :index="index+'-'+i">{{v.meta.til}}</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </el-aside>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  props: ["ary"],
  data() {
    return {
      menuList: [],
      power: localStorage.getItem("power")
    };
  },
  created() {
    this.menuInit();
  },
  methods: {
    menuInit() {
      console.log(this.ary);
      let t = [this.ary[0]];
      this.ary.reduce((prev, cur) => {
        if (prev.meta.type == cur.meta.type) {
          t.push(cur);
        } else {
          this.menuList.push(t);
          t = [cur];
        }
        return cur;
      });
      this.menuList.push(t);

      // 权限校验
      this.menuList = this.menuList.filter(item => {
        if (!this.power) return false;
        return this.power.includes(item[0].meta.power);
      });
      console.log(this.menuList);

      // 权限校验完成之后，设置默认的跳转路径

      let url = this.menuList[0] && this.menuList[0][0].path; //数组的第一项
      let ary=this.$route.path.split('/');
      if (ary.length>2&&ary.pop().length>0) {
        // 这种情况下，说明走到了二级路径下 ary.length大于2 说明至少有2个‘/’，
        // ary.pop().length>0 说明最后一项的长度不是0，也就是‘/’后面有内容存在，也说明当前在二级路径
      }else{
        this.$router.push(url)
      }
    }
  },
  components: {}
};
</script>
<style lang="less" >
.asicBox {
  width: 110%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.el-menu {
  background: #cdeaf5;
}
.el-submenu__title {
  > span {
    font-size: 18px;
  }
}
.router-link-active {
  .el-menu-item {
    color: #409eff;
    background-color: #ecf5ff;
  }
}
</style>