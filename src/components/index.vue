<template>
    <div>
        <headers></headers>

        <el-container style=" border: 1px solid #eee"   >      
                        <el-aside width="220px" style="background-color: #444C63;  height:800px" >
                          <el-menu :default-openeds="['1', '3']" style="background-color: #444C63"> 
                            <el-submenu index="1"  >
                         <template slot="title"   >  <router-link :to="'index'">  <i class="el-icon-message"></i>用户信息</router-link> </template>
                            </el-submenu>
                            <el-submenu index="2">
                              <template slot="title"> <router-link :to="'iadmin'"><i class="el-icon-menu"></i>管理员信息 </router-link> </template>
                            </el-submenu>
                             <el-submenu index="3">
                              <template slot="title"> <router-link :to="'iadduser'"><i class="el-icon-setting"></i>添加用户 </router-link> </template>
                            </el-submenu>
                             <el-submenu index="4">
                              <template slot="title"> <router-link :to="'iaddadmin'"><i class="el-icon-setting"></i>添加管理员 </router-link> </template>
                            </el-submenu>
                          </el-menu>
                        </el-aside>
                          
                        <user class="user"></user>
         </el-container>
    </div>
</template>
<script>
import headers from  '../views/headers'
 import user from '../views/user'
 export default {
   name:'index',
    components:{
         headers,user
      },
      data() {
        return {
          
        }
      },
  
     
      
     
  };
</script>
    
<style  >
     .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
   .el-submenu__title{
    color:#FDFEFD !important;
    border:1px solid #515A69;
}   
 
.el-submenu__title:hover{
   background-color: #0787D0;
   border:1px solid  #0787D0;
} 
.el-submenu__title i{
    color:#FDFEFD !important;
}  
.el-menu{
    color:#FDFEFD !important;
    border:1px solid #515A69;   
    background-color: #444C63;
}
.el-menu-item-group__title {
    color:#FDFEFD !important;
}
.el-menu-item {
    color:#FDFEFD !important;
}
 .user{ 
   width: 100%
 }
</style>