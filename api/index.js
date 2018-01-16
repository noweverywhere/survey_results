const APP_PORT = parseInt(process.env.SURVEY_APP_PORT) || 3001
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()
const router = express.Router()

router.get('/api/v1', (req, res) => res.sendFile(path.join(__dirname, 'surveys', 'index.json')))
router.use(serveStatic(path.join(__dirname, 'public')))
app.use('/', router)

app.listen(APP_PORT, () => console.log(`survey results api now listening on port ${APP_PORT}`))
