//import { BrowserWindow } from 'electron';

var express = require('express');
var app = express();
const fs = require('fs');
const pythonShell = require('python-shell');
const spawn = require('child_process').spawn;
const pythonProcess = spawn('python', ['../scripts/server.py']);

app.listen(3000, function() {
    console.log('server running on port 3000')
});
app.get('/', function(req, res) {
    res.send('Welcome to the GET request');
  });

app.get('/server', call_Server);

function call_Server(req,res) {
    pythonProcess.stdout.on('data', (data) => {
        console.log(data);
    })

pythonShell.run('/scripts/server.py', options, function(err, data) {
    if(err) res.send(err);
    res.send(data.toString())
    console.log('Server script is running')
});
}

app.on('ready', function() {
    express()
    mainWindow = new BrowserWindow({
        width: 900,
        width: 700,
        autoHideMenuBar: true,
        useContentSize: true,
    }
)}
)


