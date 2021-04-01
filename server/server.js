const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const blogRoute = require('./routes/blog');
const authRoute = require('./routes/auth');

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', blogRoute);
app.use('/api', authRoute);


/** Connect to database and create server*/
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(value => {
        console.log("Connection successfully!!!!!!!!!!!!!!")
        console.log("App listen in 4001")
        app.listen(4001)
    })
    .catch(reason => {
        console.log(reason)
    })