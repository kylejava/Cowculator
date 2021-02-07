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

app.get('/firstgrade', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/firstGrade.html'));
})
app.get('/secondgrade', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/secondGrade.html'));
})

//app.get('/thirdgrade', (req, res) => {
//  res.sendFile(path.join(__dirname + '/views/secondGrade.html'));
//})
app.get('/fourthgrade', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/fourth.html'));
})

app.get('/addition', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/addition.html'));
})

app.get('/subtraction', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/subtraction.html'));
})

app.get('/decimals', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/decimals.html'));
})

app.get('/division', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/division.html'));
})

app.get('/fractions', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/fractions.html'));
})

app.get('/graphs', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/graphs.html'));
})

app.get('/money', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/money.html'));
})

app.get('/multiplication', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/multiplication.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
