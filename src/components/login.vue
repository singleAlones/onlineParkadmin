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
                        <el-input v-model="pwd" placeholder="请输入密码"></el-input>
                        <el-button type="primary" class="button">登录</el-button>
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