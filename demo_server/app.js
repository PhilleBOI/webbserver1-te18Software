const express = require('express')
const dBModule = require('./dBModule')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index.ejs', { name: "" })
})

app.post('/', (req, res) => {
  dBModule.storePerson(req.body.name, req.body.email, req.body.age)
  
  let displayName = " " + req.body.name

  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 
