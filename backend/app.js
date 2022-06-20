const express = require('express');
var cors = require('cors')

const productRoute = require('./src/routes/productRoute');

const app = express();
app.use(express.json())
app.use(cors());
console.log("starting server");

app.listen(process.env.PORT || 3006, ()=> console.log("server listening to port ", 3006));

app.use('/products', productRoute);