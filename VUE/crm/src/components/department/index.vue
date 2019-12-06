<template>
  <el-table :data="tableData" style="width: 100%" height="100%" border highlight-current-row stripe>
    <el-table-column label="编号" type="index" align="center" width="120" :index="indexMethod"> </el-table-column>
    <el-table-column label="部门" width="200" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          <el-tag size="medium">{{ scope.row.name }}</el-tag>
        </span>
      </template>
    </el-table-column>
    <el-table-column label="描述" align="center">
      <template slot-scope="scope">
        <!-- <el-popover trigger="hover" placement="top"> -->
          <!-- <el-tag size="medium">描述： {{ scope.row.desc }}</el-tag> -->
          <div slot="reference" class="name-wrapper">{{ scope.row.desc }}</div>
        <!-- </el-popover> -->
      </template>
    </el-table-column>
    <el-table-column label="操作" width="300" align="center">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
// @ is an alias to /src
import { delDpList } from "@/api/index.js";
export default {
  name: "index",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("changeDpList");
  },
  computed: {
    tableData() {
      return this.$store.state.departmentList;
    }
  },
  
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({path:'/org/addDepartment',query:{id:row.id}})
    },
    handleDelete(index, row) {
      console.log(row);
      
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
          // 当我们点击了确认按钮之后，调用api中的delDpList方法
          delDpList(row.id).then(data => {
            if (data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.$store.dispatch('changeDpList')
              //这一步就是为了更新数据 (这是个前端请求的方式)
              // let newData=this.tableData.filter(item=>{
              //   item.id!=row.id
              // })
              // this.$store.dispatch('changeDpList',{data:newData})
            }else{
              this.$message({
                type: "error",
                message: "删除失败~"
              });
            }
          });
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    indexMethod(index) {
      return index + 1;
    }
  },
};
</script>
<style lang="less">
</style>