// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  req.requestTime = Date.now()
  next()
})

const responseTime = (req, res) => {
  req.responseTime = Date.now()
  const result = new Date(Date()).toLocaleString()
  const totalTime = req.responseTime - req.requestTime
  console.log(`${result} | ${req.method} from ${req.url} | total time: ${totalTime}ms`)
}

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
  next()
}, responseTime)

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
}, responseTime)

app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
}, responseTime)

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
}, responseTime)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})