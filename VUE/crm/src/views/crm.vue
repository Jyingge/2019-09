<template>
    <div style="height:100%">
        <el-container  >
        <my-aside width="200px" :ary="option">CRM</my-aside>
        <el-main>CRM*********Main</el-main>
      </el-container>
    </div>
</template>
<script>
// @ is an alias to /src
import nav from "@/components/nav.vue";
import option from '@/router/custormer.js'
export default {
    name: 'crm',
    data() {
        return {
            option:option,
        }
    },
    components: {
        'my-aside':nav
    }
}
</script>
<style lang="less">

</style>