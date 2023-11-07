const express = require ('express')
const app = express ()
const connectdb =require('./config/db')
const contactRouter = require('./routes/contauserRouter')
const port =5002
connectdb()
app.use(express.json())
app.use('/users',contactRouter)

app.listen(port,err=>
    err?console.log(err):console.log('ur great ${port}'))
