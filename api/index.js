const APP_PORT = parseInt(process.env.SURVEY_APP_PORT) || 3001
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()
const router = express.Router()
const ROOT_PATH = '/api/v1'

router.get(
  `${ROOT_PATH}*`,
  (req, res) => {
    const requestPath = req.path.substring(ROOT_PATH.length)
    return res.sendFile(
      path.join(__dirname, 'surveys', requestPath || 'index.json'),
      (err) => { err && res.sendStatus(404) }
    )
  }
)
router.use(serveStatic(path.join(__dirname, 'public')))
app.use('/', router)

app.listen(
  APP_PORT,
  () => console.log(`survey results api now listening on port ${APP_PORT}`)
)
