const express = require('express');
const os = require('os');
const process = require('process');
 
const app = express();
 
app.get('/', (req, res) => {
    res.send(`
        Adres IP serwera: ${os.networkInterfaces().eth0[0].address} </br>
        Nazwa serwera: ${os.hostname()} </br>
        Wersja aplikacji: ${process.env.VERSION}</br>
    `);
});
 
 
app.get('/networks', (req, res) => {
    res.send(`
        <pre>${JSON.stringify(os.networkInterfaces(), null, 2)}</pre>
    `);
});
 
app.listen(8080, '0.0.0.0', () => {
    console.log('Serwer uruchomiony na porcie 8080');
});