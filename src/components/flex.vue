<template>
<div>
    <h1>三列布局，随容器宽度等宽弹性伸缩</h1>
    <div style="display:flex;height:20px;">
      <div style="flex-grow: 1;background-color:red;"></div>
      <div style="flex-grow: 1;background-color:green;"></div>
      <div style="flex-grow: 1;background-color:blue;"></div>
    </div>
    <h1>多列布局，每列的高度按内容最高的一列等高</h1>
    <div style="display:flex;height: 40px;align-items: stretch;">
      <div style="flex:1;background-color:red;"></div>
      <div style="flex:1;background-color:green;height: 20px;">222</div>
      <div style="flex:1;background-color:blue;"></div>
    </div>
</div>
</template>
<script setup>
</script>