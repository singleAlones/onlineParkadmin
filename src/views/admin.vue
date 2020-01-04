<template>
    <div>
 
         <el-container class="containers">
            <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                
                <el-dropdown-item>新增</el-dropdown-item>
                
                </el-dropdown-menu>
            </el-dropdown>
            <span>管理员信息</span>
            </el-header>
            
            <el-main>
             <el-table
    :data="tableData2"
    style="width: 40%">
    <el-table-column
      label="管理员用户名"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{scope.row.auser }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="密码"
      width="180">
      <template slot-scope="scope">          
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.apwd }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.auser)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
            </el-main>
        </el-container>
        <div class="pages">
            第<input type="text"    v-model="pno">页  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            共<input type="text"  v-model="pageSize">条
             
            <el-button
          size="mini"
          type="success"
          @click="pnos(pno,pageSize)">查询</el-button>
        </div>
    </div>
</template>
<script>
 
export default {
    name:'user',
    data() {
      return {
        pno:1 ,
        pageSize:4,
        tableData2:[
        ]
      }
    },
   mounted() {
        this.loadUser()
      },
      methods: {
        handleDelete:function(hphone){
             var that=this;
             console.log(hphone)
              that.axios.get('deladmin',{       // 还可以直接把参数拼接在url后边
                          params:{
                            hphone:hphone
                          }
                      }).then(function(res){
                        if(res.data.code=="200"){
                           that.$message({
                            type: 'success',
                            message: res.data.msg,
                            showClose:  false
                      })
                      that.loadUser() 
                        }
                      }).catch(function (error) {
                          console.log(error);
                      });
        },
        loadUser(){
             var that=this;
         that.axios.get('seladmin',{       // 还可以直接把参数拼接在url后边
                    params:{
                      pno:that.pno,
                      count:that.pageSize
                    }
                }).then(function(res){
                      that.tableData2=[];
                     for(var i=0;i<res.data.length;i++){
                          that.tableData2.push(res.data[i])     
                     }
                     console.log(that.tableData2)
                }).catch(function (error) {
                    console.log(error);
                });
        },
        pnos(pno,pageSize){
            console.log(pno,pageSize )
            this.loadUser()
        }
      },
}
</script>
<style  scoped>
     .pages{
       padding-left: 50px;
       font-size: 14px;
     } 
     .pages input{
          width: 20px;
          text-align: center;
          margin:15px;
     }
      .pages .el-button{
        margin-left: 15px;
      }
</style>