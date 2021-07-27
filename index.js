const express = require('express')
const app = express()
const port = 3000

//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/battle',(req,res) => {
  res.render('battle.ejs', {
    p1Name: req.body.p1Name,
    p2Name: req.body.p2Name
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
