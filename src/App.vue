<script setup lang="ts">
//将导航栏也加入路由
// import HomeHeader from "./components/header/HomeHeader.vue";
</script>

<template>
<div>
  <el-container>
<!--    <el-header class="header"><home-header/></el-header>-->
<!--    导航路由name为nav-->
    <el-header><router-view name="nav"/></el-header>
    <el-main class="main">
<!--      主页面路由name为main-->
      <router-view name="main"/>
    </el-main>
  </el-container>
</div>
</template>

<style scoped>
.header{
  position: relative;
  width: 100%;
  height: 60px;
}
.main {
  width: 100%;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}
</style>
