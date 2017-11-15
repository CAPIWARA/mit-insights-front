import config from './config/serve'
import express from 'express'
import webpack from 'webpack'
import hotMiddleware from 'webpack-hot-middleware'
import devMiddleware from 'webpack-dev-middleware'
import historyApi from 'connect-history-api-fallback'
import globals from './globals'

const { PORT } = globals

const app = express()
const port = PORT
const compiler = webpack(config)

const hot = hotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
})

const dev = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
})

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hot.publish({ action: 'reload' })
    cb()
  })
})

app.use(historyApi())

app.use(dev)

app.use(hot)

app.use('/static', express.static('./static'))

const uri = 'http://0.0.0.0:' + port

console.log('> Starting dev server...')
dev.waitUntilValid(() => console.log('> Listening at ' + uri + '\n'))

app.listen(port, '0.0.0.0')
