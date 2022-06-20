const express = require('express');
var cors = require('cors')

const productRoute = require('./src/routes/productRoute');

const app = express();
app.use(express.json())
app.use(cors());
console.log("starting server");

const port = 3006;
app.listen(3006, ()=> console.log("server listening to port ", port));

app.use('/products', productRoute);