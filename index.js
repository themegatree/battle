const express = require('express')
const app = express()
const port = 3000
const Attack = require('./js functionality/attack')
const postAttack = require('./js functionality/postAttack')

//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/battle',(req,res) => {
  //Other res methods - res.send?
  res.render('battle.ejs', {
    p1Name: req.body.p1Name,
    p2Name: req.body.p2Name,
    attackMessage: ''
  })
})

app.post('/battle-update', (req,res) => {
    res.render('battle.ejs', {
      p1Name: req.body.p1Name,
      p2Name: req.body.p2Name,
      attackMessage: Attack()
    })
  })

// Put the post request into a function?
// app.post('/battle-update', postAttack()
// );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
