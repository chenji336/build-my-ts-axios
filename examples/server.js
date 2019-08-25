const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackDevMiddle = require('webpack-dev-middleware')
const webpackHotMiddle = require('webpack-hot-middleware')
const bodyParser = require('body-parser')

const app = express(),
  compiler = webpack(webpackConfig)

app.use(webpackDevMiddle(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))
app.use(webpackHotMiddle(compiler))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
const router = express.Router()
router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})
app.use(router)

app.use(express.static(__dirname))

const port = process.env.port || 8000
app.listen(port, () => {
  console.log('listening port', port)
})
