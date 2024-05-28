import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Device } from '@renderer/type/CustomType'

export const useDevicesStore = defineStore('devices', () => {
  // 我不会ts，下面这行应该如何修改呢
  const devices = ref<Device[]>([])
  function addDevice(device: Device) {
    devices.value.push(device)
  }

  // 预先添加一些数据,后续应该通过设备扫描获取
  addDevice({ id: 1, name: 'bruce', ip: '192.168.1.101', port: 8080 })
  addDevice({ id: 2, name: 'kelton', ip: '192.168.1.2', port: 8081 })

  return { devices, addDevice }
})
