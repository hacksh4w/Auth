const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMIddleware')
const port = process.env.PORT || 5500

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Served started on port ${port}`))
