import { BrowserWindow } from 'electron';

var express = require('express');
var app = express();
const fs = require('fs')
let {PythonShell} = require('python-shell');
let pyshell = new PythonShell('/scripts/server.py')
app.listen(3000, function() {
    console.log('server running on port 3000')
})

app.on('ready', function() {
    express()
    mainWindow = new BrowserWindow({
        width: 900,
        width: 700,
        autoHideMenuBar: true,
        useContentSize: true
    }
)}
)
mainWindow.readFile('/scripts/server.py', 'utf-8', )

