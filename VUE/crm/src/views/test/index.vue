<template>
  <div style="padding:10px" class="qwer">
      <h1>{{data.til}}</h1>
      <loop v-for="i in data.children" :key="i.til" :data="i"></loop>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "loop",
  props:['data'],
  data() {
    return {
     
    };
  },
  components: {}
};
</script>
<style lang="less">
</style>