const express = require('express')
const app = express()
var path = require('path');
const port = 3000



app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
})
app.get('/subjects', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/subjects.html'));
})

app.get('/grade', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/grade.html'));
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
