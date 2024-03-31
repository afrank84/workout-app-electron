const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html'); // Load your HTML file here
}

app.whenReady().then(createWindow);

//Handle Mac Users
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})