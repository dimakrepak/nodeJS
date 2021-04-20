const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const app = express();
const productRouter = require('./routes/products.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/products', productRouter);

//Connection to db with mongoose
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log('database connect');
});

app.listen(port, () => console.log(`application start at ${port}`));
