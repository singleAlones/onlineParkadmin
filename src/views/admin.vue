<template>
    <div>
         <el-container class="containers">
            <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>管理员权限</span>
            </el-header>
            
            <el-main>
            <el-table >
                <el-table-column prop="date" label="序号" width="140">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="电话">
                </el-table-column>
            </el-table>
            </el-main>
        </el-container>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
    </div>
</template>
<script>
 
export default {
    name:'admin',
   
}
</script>
<style  scoped>
   
</style>