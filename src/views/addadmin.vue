<template>
    <div class="users">  
           <div class="user">添加管理员信息</div>
           <div>
               <el-input v-model="name" placeholder="请输入管理员账号"></el-input>
           </div>
           <div>
                <el-input v-model="pwd" placeholder="请设置密码"></el-input>
           </div>
          <div>
             <el-button type="primary" class="button" @click="add">保存</el-button>
          </div>
           
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:'',
            pwd:''
        }
    },
    methods: {
        add(){
              var that=this;
             console.log(that.name,that.pwd)
              that.axios.get('addadmin',{       // 还可以直接把参数拼接在url后边
                          params:{
                            auser:that.name,
                            apwd:that.pwd
                          }
                      }).then(function(res){
                       console.log(res)   
                 
                        if (res.data.code == 400) {
                            that.$message({
                                center:true,
                                type: 'info',
                                message: res.data.msg,
                                showClose:  false
                            })
                        }  
                          else if (res.data.code == 301) {
                              that.$message({
                                   center:true,
                                type: 'error',
                                message: res.data.msg,
                                showClose:  false
                            })
                        }else if(res.data.code==300){
                             that.$message({
                                  center:true,
                                type: 'warning',
                                message: res.data.msg,
                                showClose:  false
                            })
                        } else if (res.data.code == 200) {
                             that.$message({
                                  center:true,
                                type: 'success',
                                message: res.data.msg,
                                showClose:  false
                            })
                        }      
                      }).catch(function (error) {
                          console.log(error);
                      });
        }
    },
}
</script>
<style scoped>
    .users{
    margin-left:500px;
    }
    .user{
        font-size: 30px;
        padding-left:50px;
        margin-top:100px;
        box-sizing: border-box;
    }
    .el-input{
        margin-top:30px;
        width:300px;
       
    }
    .el-button{
        margin-top: 30px;
        margin-left:120px;
       
    }
</style>