const express = require('express')
const cors=require("cors")
const connectDB = require('./dbconnect')
const app = express()


//connect to DB
connectDB()

//routes
app.use(cors())
app.use(express.json())


app.use('/boutique', require('./routes/boutique'))
app.use('/article', require('./routes/article'))
app.use('/panier', require('./routes/panier'))
app.use('/commande', require('./routes/commande'))
//server

app.listen(5000, (err) =>
  err ? console.log(err) : console.log(`server is running on 5000`)
)
