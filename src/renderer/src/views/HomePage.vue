<template>
  <div class="mainContainer">
    <div class="left-sidebar">
      <!-- Left Sidebar Content -->
      <!-- <div>内容1</div> -->

      <div class="titleDiv">传输列表</div>

      <div class="deviceDiv">
        <div v-for="item in devicesStore.devices" :key="item.id" class="deviceItem">
          <div class="deviceLabel">({{ item.name }}) {{ item.ip }}</div>
          <button class="connBtn" @click="connectTo(item.id)">连接</button>
        </div>
      </div>
    </div>
    <div class="rightContent">
      <!-- Right Content -->
      <div class="fileArea">发送内容</div>
      <div class="sendArea">
        <button class="sendFileBtn" @click="sendFile">发送文件</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { reactive } from 'vue'
import { useDevicesStore } from '@renderer/stores/devices'

const devicesStore = useDevicesStore()

// let item = ref(devicesStore.devices)

const connectTo = (id: number) => {
  console.log(id)
}

// const versions = reactive({ ...window.electron.process.versions })

const sendFile = () => {
  // 发送调用系统文件管理器事件
  // @ts-ignore (define in dts)
  console.log(window.api.fileChooser())
}
</script>

<style lang="css">
.mainContainer {
  display: flex;
  height: 100vh; /* 这里设置父容器的高度，例如使其占满视口高度 */
  width: 100vw;
}
.left-sidebar {
  width: 300px;
  background-color: #f9f1f1eb; /* 仅为了展示，可以自定义颜色 */
}

.titleDiv {
  background-color: #9cdce7;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deviceDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.deviceItem {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
  margin: 5px;
  border-radius: 15px;
}
.deviceItem:hover {
  background-color: #f1fbfddb;
}

.deviceLabel {
  margin-left: 5px;
  margin-right: 5px;
}

.connBtn {
  width: 60px;
  height: 30px;
  background-color: #9cdce7;
  border-width: 0px;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
}
.connBtn:hover {
  background-color: #80e7f9;
  /* 添加阴影代码 */
  box-shadow: 2px 2px 4px rgba(247, 117, 117, 0.2); /* 水平偏移 垂直偏移 模糊半径 阴影颜色 */
}

.rightContent {
  /* width: 300px; */
  flex-grow: 1;
  background-color: #dce7dc; /* 仅为了展示，可以自定义颜色 */
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.fileArea {
  flex-grow: 1;
}

.sendArea {
  height: 100px;
  /* 在上方添加边界线  1px 实线 颜色#00ff00 */
  border-top: 1px solid #000000aa;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sendFileBtn {
  width: 200px;
  height: 50px;
  background-color: #80e7f9;
  border-width: 0px;
  border-radius: 10px;
}
</style>
