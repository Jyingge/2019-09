<template>
  <div class="userBox">
    <div style=" padding: 10px;">
      <el-select  v-model="value" @change="selectChange" style="padding-right:20px"  placeholder="请选择部门" >
        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
      <el-input placeholder="按姓名/电话/部门进行模糊查询" style="width:300px" v-model="input4" @change="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <el-table  ref="multipleTable"  :data="tableData"  tooltip-effect="dark"  style="width: 100%"
            @selection-change="handleSelectionChange"   border   stripe  >
      <el-table-column type="selection" width="50" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" width="100" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.sex ==0 ? '男':'女'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="department" label="部门" align="center"></el-table-column>
      <el-table-column prop="job" label="职务" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column prop="phone" label="电话" align="center"></el-table-column>
      <el-table-column prop="desc" label="描述" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// @ is an alias to /src
import { delUserList } from "@/api/index.js";
export default {
  name: "index",
  data() {
    return {
      value: "",
      input4: "",
      multipleSelection: []
    };
  },
   computed: {
    tableData() {
      return this.$store.state.userList;
    }
  },
  created() {
    this.$store.dispatch('changeUserList');
  },
  components: {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: "/org/addUser", query: { id: row.id } });
    },
    handleDelete(index, row) {
      console.log(index, row);
       this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(()=>{
        delUserList(row.id).then(data=>{
          if (data.code==0) { 
            this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.$store.dispatch('changeUserList');
           }else{
              this.$message({
                type: "error",
                message: "删除失败~"
              });
          }
        })
      }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
       
    },
    selectChange(val) {
      console.log(val);
      this.$store.dispatch("changeUserList", {
        departmentId: val,
        search: this.input4
      });
    },
    search() {
      this.$store.dispatch("changeUserList", {
        departmentId: this.value||0,
        search: this.input4
      });
    }
  },
  created() {
    this.$store.dispatch("changeUserList");
  },
  computed: {
    options() {
      let ary = this.$store.state.departmentList;
      return [
        {
          id: "all",
          name: "全部"
        },
        ...ary
      ];
    },
    tableData() {
      return this.$store.state.userList;
    }
  }
};
</script>
<style lang="less">
.userBox {
  text-align: right;
  height: 100%;
}
</style>