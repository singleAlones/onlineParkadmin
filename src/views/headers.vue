<template>
       
    <div class="header">
        <div>世纪华耀管理系统</div>
        <div>
            <div>管理员:</div> 
            <div>{{auser}}</div>
            <div>
             <router-link :to="'login'">退出</router-link>    
            </div>
         </div>
    </div>
           
</template>
<script>
export default {
    name:'headers',
    data() {
        return {
            auser:''
        }
    },
    mounted() {
        var that=this
        that.auser=that.$store.state.currentUser.auser
    },
}
</script>
<style styled>
    .header{
    height:70px;
    background: #2475C4;
    width: 100%;
    color:white;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
   align-items: center;
}
.header div{
    display: flex;
    margin-right: 20px;
    box-sizing: border-box;
}

</style>