<template>
  <div class="headerBox">
    <div>
      <van-icon class="lt" name="video-o" />
      <van-search input-align="center" placeholder="请输入搜索关键词" v-model="value" />
      <van-icon class="rt" name="calender-o" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "myheader",
  data() {
    return {
      value: "",
    };
  },
  components: {}
};
</script>
<style lang="less">
.headerBox {
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    > .lt,
    > .rt {
      width: 13vw;
      text-align: right;
      font-size: 8vw;
    }
    > div {
      flex: auto;
    }
    > .rt {
      text-align: left;
    }
  }
  
}
</style>