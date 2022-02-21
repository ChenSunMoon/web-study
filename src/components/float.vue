<script setup>

import { ref } from 'vue'
defineProps({
  msg: String
})
const count = ref(0)
</script>

<template>
<div>
  <h1>1.文字环绕效果</h1>
  <p style="width:200px;height: 100%;overflow: hidden;word-wrap: break-word;">
    <img style="float:left;width: 50px;height: 50px;background-color: red;">
    这儿是文字，这儿是文字，这儿是文字，这儿是文字这儿是文字，这儿是文字这儿是文字，这儿是文字这儿是文字，这儿是文字这儿是文字，这儿是文字这儿是文字，这儿是文字这儿是文字，这儿是文字
     
  </p>
  <h1>2.clear</h1>
  <p style="height: 100%;overflow: hidden;word-wrap: break-word;">
    <img style="float:left;width: 50px;height: 50px;background-color: red;">
    这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，这儿是文字，
     <div style="clear: both;">我已设置clear</div>
  </p>
</div>
  
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
