import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('nautilusWindow', {
  minimize: () => ipcRenderer.invoke('window:minimize'),
  toggleMaximize: () => ipcRenderer.invoke('window:maximize-toggle') as Promise<boolean>,
  close: () => ipcRenderer.invoke('window:close'),
});
