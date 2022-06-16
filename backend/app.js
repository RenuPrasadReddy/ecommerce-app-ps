const express = require('express');

const productRoute = require('./src/routes/productRoute');

const app = express();
app.use(express.json())
console.log("here");
app.listen(process.env.PORT || 3001, ()=> console.log("server listening to port ", 3001));

app.use('/products', productRoute);