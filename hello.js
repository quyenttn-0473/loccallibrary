const express = require('express');
const configViewEngine = require('./src/config/viewEngine');
const connectDB = require('./src/config/connectDB');
const app = express();
const port = 8090;

configViewEngine(app);
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log('Example app listening on port: ', port);
});
