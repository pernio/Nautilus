import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("nautilus", {
  getRoot: () => ipcRenderer.invoke("nautilus:getRoot"),

  writeFile: (relativePath: string, data: string) =>
    ipcRenderer.invoke("nautilus:writeFile", relativePath, data),

  readFile: (relativePath: string) =>
    ipcRenderer.invoke("nautilus:readFile", relativePath),
});
