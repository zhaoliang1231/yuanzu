<template>
  <!--订单列表-->
  <div class="user-content">
      <h3>订单列表</h3>
      查看你的订单
      <el-table :data="tableData" style="width: 100%">
          <el-table-column label="订单号" width="200">
              <template slot-scope="scope">
                  <router-link :to="{name:'Order'}">
                    <span>{{ scope.row.orderNum }}</span>
                  </router-link>
              </template>
          </el-table-column>
          <el-table-column label="订单状态" width="80">
              <template slot-scope="scope">
                  <span>{{ scope.row.state }}</span>
              </template>
          </el-table-column>
          <el-table-column label="订单提交日期" width="200">
              <template slot-scope="scope">
                  <span>{{ scope.row.submdate}}</span>
              </template>
          </el-table-column>
          <el-table-column label="总计" width="80">
              <template slot-scope="scope">
                  <span class="font-color-red">￥{{ scope.row.count }}</span>
              </template>
          </el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                  <router-link :to="{name:'Order'}">
                      <el-button size="mini">查看</el-button>
                  </router-link>
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">立即支付</el-button>
                  <el-button size="mini"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },

  data () {
    return {
      tableData: [{
        orderNum: '161465456456',
        state: '订单提交',
        submdate: '2019年5月25日 上午9：25',
        count: '666'
      }]
    }
  }
}

</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  /deep/
  .el-button+.el-button{
      margin-left: 0px;
  }
  .user-content{
    .font-color-red{
      font-weight: bold;
    }
  }

</style>
