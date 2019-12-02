<template>
  <div class="hotBox">
    <van-tabs type="card" v-model="index" @change="getList">
      <van-tab v-for="item in ary" :title="item.til" :key="item.type">
        <my-item v-for="(i,n) in hotlist" :key="i.ts" :data="i" :index="n"></my-item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
import Item from "./item";
import { hotlist } from "@/api/home";
import { mapState } from "vuex";
export default {
  name: "hot",
  data() {
    return {
      ary: [
        {
          til: "王峰",
          type: "tuijian"
        },
        {
          til: "傻子",
          type: "keji"
        },
        {
          til: "笨蛋",
          type: "jiaoyu"
        },
        {
          til: "狗屎",
          type: "yule"
        },
        {
          til: "傻猪",
          type: "qiche"
        },
        {
          til: "烦人",
          type: "jinrong"
        },
        {
          til: "妖精",
          type: "tiyu"
        }
      ],
      index: 0,
      oldType: "",
      flag:true,
    };
  },
  created() {
    this.getList();
    window.onscroll=()=>{
        if(!this.flag)return;
        this.flag=false;
        this.getMore();
    }
  },
  beforeDestroy() {
      window.onscroll=null;
  },
  methods: {
    getList() {
      this.$store.dispatch("getHotList", {
        newType: this.ary[this.index].type,
        oldType: this.oldType, //旧值怎么存
        count: 10,
        category: this.ary[this.index].type
      }).then(()=>{
        this.flag=true;
      })
      this.oldType = this.ary[this.index].type; //更新oldtype
    },
    getMore() {
      let app = document.getElementById("app");
      let ct =  document.documentElement.clientHeight || document.body.clientHeight;
      let st = document.documentElement.scrollTop;
      if (app.clientHeight <= ct + st + 50) {
        this.flag=false;
        this.getList();
      }
    }
  },
  components: {
    "my-item": Item
  },
  computed: {
    ...mapState(["hotlist"])
  }
};
</script>
<style lang="less">
.hotBox {
  padding-top: 3vw;
  text-align: left;
  .van-tabs__nav--card {
    border: none;
  }
  .van-tabs__nav--card .van-tab {
    border: none;
    border-radius: 2px;
    color: #646464;
    background-color: #f6f6f6;
    margin: 0 1vw;
    line-height: 30px;
    flex-basis: 18% !important;
  }
  .van-tabs__nav--card .van-tab.van-tab--active {
    font-weight: 500;
    color: #0084ff;
    background-color: rgba(0, 132, 255, 0.1);
  }
}
</style>