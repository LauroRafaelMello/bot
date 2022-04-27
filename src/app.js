const express = require('express')
const app = express()
const router = require('./router/routes')

const port = 3000

app.use('/router', router)

app.listen(port, () => {
    console.log(`Server is running in: http://localhost:${port}`)
})