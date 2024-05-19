<script setup lang="ts">
import {ref} from 'vue'
import {Search} from '@element-plus/icons-vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


const input3 = ref('')
const select = ref('')
</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <div style="flex-grow: 1"/>
    <div>
      <el-row align="middle" justify="space-between">
        <el-col :span="15">
          <img
            style="width: 50px"
            src="../assets/vue.svg"
            alt="Vue logo"/></el-col>
        <el-col :span="5">|logo</el-col>
      </el-row>
    </div>
    <div style="flex-grow: 7 "/>
    <!--    <el-menu-item index="1">-->
    <div class="mt-4">
      <el-row align="middle" style="height: 100%;margin-right: 10px">
        <el-col>
          <el-input
              v-model="input3"
              style="max-width: 1000px;min-width: 200px;"
              placeholder="请输入搜索内容"
              class="input-with-select"
              size="large"
          >
            <template #prepend>
              <el-button :icon="Search"/>
            </template>
            <template #append>
              <el-select v-model="select" placeholder="选项" style="width: 95px;"
                         size="large">
                <el-option label="Restaurant" value="1"/>
                <el-option label="Order No." value="2"/>
                <el-option label="Tel" value="3"/>
              </el-select>
            </template>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <!--    </el-menu-item>-->
    <el-menu-item index="2"><router-link to="/" style="text-decoration: none">首页</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/user-page" style="text-decoration: none">用户中心</router-link></el-menu-item>
    <el-sub-menu index="4">
      <template #title>工作区</template>
      <el-menu-item index="4-1">item one</el-menu-item>
      <el-sub-menu index="4-2">
        <template #title>item four</template>
        <el-menu-item index="4-2-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>