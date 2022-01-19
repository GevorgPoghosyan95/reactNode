require('./database/connection')
require('dotenv').config()
const express = require('express')
const {router,authRouter} = require('./routes/web')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors({
    credentials:true,
    origin:process.env.CLIENT_URL
}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use('/api',router,authRouter)

const start = async ()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT,()=>{
            console.log(`SERVER RUN ${process.env.PORT}`)
        })
    }catch (e) {
        console.log(e)
    }
}

start()
