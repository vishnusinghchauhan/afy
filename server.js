const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
var compression = require('compression')
var responseTime = require('response-time')

var cors =  require('cors');

const app = express();

var authRouter = require('./routes/api/Users');


const dbPort = process.env.DB_PORT || 27017;
const dbUrl = process.env.MONGO_NAME || "localhost";
const dbCollection = process.env.DB_COLLECTION || "aflycloud";

mongoose.connect(`mongodb://${dbUrl}/${dbCollection}`, {useNewUrlParser: true})
    .then(_ => console.log('MongoDB connection success'))
.catch(err => console.error(err));
mongoose.set('useCreateIndex', true);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/v1/api/users/', authRouter);


app.use(compression())
app.use(responseTime())

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
