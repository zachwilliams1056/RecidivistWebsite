const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize');
require("dotenv").config(); 


const app = express()
app.use(express.json())
app.use(cors())
const PORT = 5000

const{DATABASE_URI} = process.env

const sequelize = new Sequelize(DATABASE_URI, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))   

app.post('/register', (req,res)=>{
    const {email} = req.body
    sequelize.query(
        'INSERT INTO newsletter_subscribers (email) VALUES (:email) returning *',
        {
          replacements: { email: email },
          type: QueryTypes.INSERT
        }
      ).then((dbRes)=>{
        res.send(dbRes[0])
      })

})

app.get('/', (req, res) => res.send('Hello World!'))