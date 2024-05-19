<script setup lang="ts">

</script>

<template>
  <el-row justify="space-evenly" style="background: #efefef; border-radius: 5px;">
    <el-col :span="14">
      <el-card class="homeCard">
        <div>试例</div>
        <hr>
        <div>123</div>
      </el-card>
      <el-card class="homeCard">
        <div>试例</div>
        <hr>
        <div>123</div>
      </el-card>
      <el-card class="homeCard">
        <div>试例</div>
        <hr>
        <div>123</div>
      </el-card>
    </el-col>
    <el-col :span="5" style="margin-top: 30px">
      <el-card>
        头像
        <hr>
        信息简介
        <hr>
        按钮|按钮|按钮
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.homeCard {
  min-width: 100%;
  min-height: 250px;
  float: left;
  margin-top: 30px
}
</style>