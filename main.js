const { app, BrowserWindow } = require('electron');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
	app.quit();
}

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		useContentSize: true,
		width: 500,
		height: 500
		// webPreferences: {
		// 	preload: 'preload.js'
		// }
	});

	// and load the index.html of the app.
	mainWindow.loadFile('app/index.html');

	// Open the DevTools.
	// mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
	app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
