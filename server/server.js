const express = require('express')
const app = express()
const cors = require('cors')
var path = require('path');

app.use(cors())

var rootPath = path.normalize(__dirname + '/../');

//app.use(express.static(rootPath + '/public'));
app.use(express.static(rootPath + '/dist/dev'));
app.use('/public/styles.css', express.static(rootPath + '/public/styles.css'));
app.use('/assets', express.static(rootPath + '/public/assets'));

app.listen(process.env.PORT || 3000);