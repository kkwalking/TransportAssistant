import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
// interface API {
//   fileChooser(): string
// }
// 对preload文件进行改动需要重新启动项目
const api = {
  // 下面这行代码如何修正
  fileChooser() {
    const ret = electronAPI.ipcRenderer.invoke('openFileChooser')
    ret.then((v) => {
      console.log(v)
    })
    return ret
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
