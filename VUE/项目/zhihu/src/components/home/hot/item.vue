<template>
  <div class="itemBox">
    <div class="iconBox">
        {{index+1}}
    </div>
    <div class="contentBox">
      <h4>{{data.title}} </h4>
      <p>{{data.author}}</p>
    </div>
    <div class="imgBox">
      <img :src="data.image_field ? data.image_field.url : ''" alt="王峰是傻子呗？  是哒！" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "item",
  props:['data','index'],//data就是从父组件拿到的数据
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.itemBox {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 2vw 0;
  width: 90vw;
  margin: auto;
  .iconBox {
    width: 9vw;
    line-height: 9vw;
  }
  .contentBox {
    width: 70vw;
    overflow-wrap: break-word;
  }
  .imgBox {
    width: 20vw;
    height: 18vw;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>