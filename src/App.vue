<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: url('@/assets/bg2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #ffffff;
}

.app-container {
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
}
</style>
