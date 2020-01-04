<template>
    <div class="users">  
           <div class="user">添加用户信息</div>
           <div>
               <el-input v-model="name" placeholder="请输入用户名"></el-input>
           </div>
           <div>
                <el-input v-model="phone" placeholder="请输入电话"></el-input>
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
            phone:''
        }
    },
    methods: {
        add(){
              var that=this;
             console.log(that.name)
              that.axios.get('user',{       // 还可以直接把参数拼接在url后边
                          params:{
                            hname:that.name,
                            hphone:that.phone
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
                        } else if (res.data.code == 305) {
                             that.$message({
                                  center:true,
                                type: 'error',
                                message: res.data.msg,
                                showClose:  false
                            })
                        } else if (res.data.code == 301) {
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
        padding-left:70px;
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