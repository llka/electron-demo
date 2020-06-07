import { app, BrowserWindow } from "electron";
import * as electronLocalShortcut from "electron-localshortcut";
import * as path from "path";

let window: Electron.BrowserWindow;

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window === null) {
    createWindow();
  }
});

function createWindow() {
  window = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  window.loadFile(getIndexPath());

  electronLocalShortcut.register(window, 'F12', () => {
    window.webContents.openDevTools();
  });

  // Emitted when the window is closed.
  window.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    window = null;
  });
}



function getIndexPath() {
  return path.join(__dirname, "../index.html");
}
