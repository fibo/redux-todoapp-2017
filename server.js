const path = require('path')
const webpack = require('webpack')
const express = require('express')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

const port = 8080

app.use(express.static(path.join(__dirname, 'public')))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
}

app.get('/', sendIndex)
app.get('/all', sendIndex)
app.get('/completed', sendIndex)
app.get('/active', sendIndex)

app.listen(port, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening at http://localhost:${port}/`)
})
