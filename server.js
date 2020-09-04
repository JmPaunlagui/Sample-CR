// Config dotev
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const URI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0-kao24.gcp.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

mongoose.connect(URI, { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err) =>{       
    if (err) return console.log('Could not connect to database:', err.reason);
    else return console.log('Connected to database ' + URI );
})

app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true}))

app.use('/api', require('./post.route'))


app.listen(process.env.PORT , () => {
    console.log(`App listening on port ${process.env.PORT}`);
});