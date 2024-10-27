const express = require('express');
const app = express();
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
const Connetion = require('./config/db')
dotenv.config({path:path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/product')
const orders = require('./routes/order')

Connetion()



app.use(express.json());
app.use(cors())
app.use('/api/v1/', products);
app.use('/api/v1/', orders)



app.listen(8000 , () =>{
    console.log(`server is running port ${process.env.PORT} IN production`)
});

