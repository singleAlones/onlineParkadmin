<template>
    <div class="bg"> 
      
         <div class="logo">
                   线上产业园后台管理
          </div>
         <div class="login">
              
                <div class="admin">管理员登录</div>
                <div class="content">
                        管理员登录:
                        <el-input v-model="name" placeholder="请输入账号"></el-input>
                        密码:
                        <el-input v-model="pwd" type="pwd" placeholder="请输入密码"></el-input>
                        <el-button type="primary" class="button" @click="login">登录</el-button>
                </div>
               
         </div>
    </div>
</template>
<script>
export default {
     data() {
        return {
        name: '',
        pwd:''
        }
    
  },
   methods: {
        login:function(){
            var that=this;
           if(that.name===""||that.pwd===""){
              that.$message({
                    type: 'error',
                    message: '管理员姓名或密码为空',
                    showClose: false
                }) 
           }else{
               this.axios.post('admin',{       // 还可以直接把参数拼接在url后边
                    params:{
                        auser:that.name,
                        apwd:that.pwd
                    }
                }).then(function(res){
                    console.log(res)
                   if(res.data.code==301){
                     that.$message({
                            type: 'error',
                            message: res.data.msg,
                            showClose:  false
                      }) 
                   }else if(res.data.code==200){
                         that.$message({
                            type: 'success',
                            message: res.data.msg,
                            showClose:  false
                      }) 
                      setTimeout(() => {
                           that.$router.push('/index')
                      }, 1000);
                     that.$store.commit('setAuser', {auser: that.name})
                   }
                }).catch(function (error) {
                    console.log(error);
                });
            } 
        }
    }
}
</script>
<style   scoped>
      .logo{
          font-size: 40px;
          padding-left: 40px;
          padding-top: 40px;
           color:aliceblue;
      }
      .bg{
          height: 920px;
          width: 100%;
          background-color:#054F90 ;
          background-size: 100% 100%;   
        
      }
      .login{
          color:aliceblue;
          width:400px;
          height: 200px;
          margin:200px auto;
      }
      .admin{
          margin-top:30px;
          background:#1A80CB;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 25px;
          border-radius: 5px;
      }
      .el-input{
          margin-top:10px;
          margin-bottom: 10px;
      }
      .content{
          background:#F6F6F6;
          color:#626262;
          padding:15px;
          padding-top: 40px;
          padding-bottom:40px;
          box-sizing: border-box;
      }
      .button{
          margin-top:20px;
          width:370px;
          background:#1A80CB
      }
</style>    