<template>
  <div class="launchContainer">
    <button class="startBtn" @click="startTrans">启用传输</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
// 不要通过this.$router去获取，获取不到的
const router = useRouter()
const startTrans = () => {
  console.log(router)

  // 导航到一个新的 URL
  router.push({ path: '/home' })
}
</script>
<style scoped>
.launchContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 这里设置父容器的高度，例如使其占满视口高度 */
  width: 100vw;
}

.startBtn {
  background-color: rgb(60, 181, 23);
  border-width: 0;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  color: white;
}
</style>
