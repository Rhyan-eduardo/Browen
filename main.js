const { app, BrowserWindow } = require('electron');

app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');

require('electron-reload')(__dirname);

function createWindow () {
    let win = new BrowserWindow({
    width: 270,
    height: 590,
    resizable: false,
    frame: false,
    transparent: true, 
    icon: __dirname + "/icon.png",
    //minWidth: 1366,
    //minHeight: 700,
  });

  //win.maximize();
  win.removeMenu();
  win.loadFile('./Screens.app/Launch/Launch.screen.app.html')

}

app.whenReady().then(createWindow);

/*

const http = require("http")
    , PageChanged = require("page-changed")
    ;
 
// Constants
const PORT = 8000;
 
// Create a http server
http.createServer((req, res) => {
    res.end(Math.floor(new Date().getTime() / 1000).toString());
}).listen(PORT);
 
// Detect changes
let pc = new PageChanged({
    page: "http://localhost:" + PORT
  , interval: 1000
}, (err, html) => {
    console.log(html);
})

*/