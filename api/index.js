const express = require('express')
const app = express()
const APP_PORT = parseInt(process.env.SURVEY_APP_PORT) || 3001

app.get('/', (req, res) => res.send('Hello Culture Amp'))

app.listen(APP_PORT, () => console.log(`survey results api now listening on port ${APP_PORT}`))
