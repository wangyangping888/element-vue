<template>
  <div id="admin">
    <el-container class="container">
      <el-header class="header">Header</el-header>
      <el-container class="aside-container">
        <el-aside class="aside" width="200px">Aside</el-aside>
        <el-main> <router-view/></el-main>
      </el-container>
       <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="less">
    #admin {
      height: 100%;
      .container {
        height: 100%;
        .header {
          background-color: black
        }
        .aside-container {
          height: 100%;
          .aside {
            height: 100%;
            background-color: grey
          }
        }

        .footer {
          background-color: black

        }
      }
      
    }
</style>
