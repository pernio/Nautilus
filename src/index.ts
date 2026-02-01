import { app, BrowserWindow, ipcMain } from "electron";
import fs from "fs";
import path from "path";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let ROOT: string;

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  // Assign ROOT safely after Electron is ready
  ROOT = path.join(app.getPath("downloads"), "Nautilus");

  // IPC handlers
  ipcMain.handle(
    "nautilus:writeFile",
    async (_, filePath: string, data: string) => {
      const fullPath = path.join(ROOT, filePath);
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, data, "utf-8");
    },
  );

  ipcMain.handle("nautilus:readFile", async (_, filePath: string) => {
    const fullPath = path.join(ROOT, filePath);
    if (!fs.existsSync(fullPath)) return null;
    return fs.readFileSync(fullPath, "utf-8");
  });

  ipcMain.handle("nautilus:getRoot", () => ROOT);

  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
