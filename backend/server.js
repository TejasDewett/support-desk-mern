const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

//connect to db
connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'JSON'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))