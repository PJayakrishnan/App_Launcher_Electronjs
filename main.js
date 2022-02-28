
const { createPublicKey } = require("crypto");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu;
let win;
function CreateWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes: true
    }));
    win.on('closed',()=>{
        win = null;
    })

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
}

app.on('ready',CreateWindow);

const mainMenuTemplate = [
    {
        label: 'File',
        submenu:[
            {
                label:'Notepad',
                click(){
                    var child = require('child_process').execFile;
                    var executablePath = "C:\\Windows\\Notepad.exe";

                    child(executablePath, function(err, data) {
                        if(err){
                        console.error(err);
                        return;
                        }                                                                                   
 
                        console.log(data.toString());
                    });
                }
            },
            {
                label:'WordPad',
                click(){
                    var child = require('child_process').execFile;
                    var executablePath = "C:\\Program Files (x86)\\Windows NT\\Accessories\\wordpad.exe";

                    child(executablePath, function(err, data) {
                        if(err){
                        console.error(err);
                        return;
                        }                                                                                   
 
                        console.log(data.toString());
                    });
                }
            },
            {
                label:'Paint',
                click(){
                    var child = require('child_process').execFile;
                    var executablePath = "C:\\Windows\\System32\\mspaint.exe";

                    child(executablePath, function(err, data) {
                        if(err){
                        console.error(err);
                        return;
                        }                                                                                   
 
                        console.log(data.toString());
                    });
                }
            },
            {
                label:'Quit',
                accelerator:'ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]

    }
]