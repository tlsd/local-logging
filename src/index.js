const express = require('express')
const http = require('http')
const app = module.exports = express()
const port = 9000


// serve pure static assets
// app.use(express.static('dist'))

app.get('/', (req, res) => {
  let text = req.query.text
  console.log(text)
  res.send();
})


http.createServer(app).listen(port, function (err) {
  if (err) {
    console.error(err)
    return
  }
  console.log('Listening at http://localhost:' + port)
})
