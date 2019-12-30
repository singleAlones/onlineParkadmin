<template>
    <div>
           <div class="user">添加用户信息</div>
           <div>
               <el-input v-model="name" placeholder="请输入账号"></el-input>
           </div>
           <div>
                <el-input v-model="pwd" placeholder="请输入密码"></el-input>
           </div>
          <div>
             <el-button type="primary" class="button">保存</el-button>
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
}
</script>
<style scoped>
    .user{
        font-size: 30px;
        text-align: center;
        margin-top:100px;
    }
    .el-input{
        margin-top:30px;
        width:300px;
       
    }
    .el-button{
        margin-top: 30px;
    }
</style>