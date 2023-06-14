<script setup lang="ts">
import dic from "@/components/dic.vue"
</script>

<template>
    <dic request-key="fruit" name="水果列表"></dic>
    <el-divider></el-divider>
    <dic request-key="class" name="班级列表"></dic>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
