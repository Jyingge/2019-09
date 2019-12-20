<template>
  <div style="height:100%">
    <div ref="box1" style="height:600px;width:600px"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import echarts from "echarts";
import option1 from "./echartsOption/1";
export default {
  name: "add",
  data() {
    return {};
  },
  components: {},
  mounted() {
    // dom 加载完成的钩子函数
    this.initBox1();
  },
  methods: {
    initBox1() {
      var myChart = echarts.init(this.$refs.box1);
      myChart.on("updateAxisPointer", function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)"
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      // 绘制图表
      myChart.setOption(option1);
    }
  }
};
</script>
<style lang="less">
</style>