const express = require('express');

const path = require('path');  //経路処理
const jsonIO=require('./controller/JsonIO');


const app = express();



app.use(express.static(path.join(__dirname, 'public')));


app.get('/JsonIO',jsonIO.ControllergetAll);   //All Tags load
app.post('/saveJson',express.json(),jsonIO.ControllerSave);  //send=>insertJson(API)=>Json


app.get('/crud2', (req, res) => {
    //res.sendFile(`${__dirname}/public/crud.html`);
    res.sendFile(path.join(__dirname, 'public/crud2.html'));
});


app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});

