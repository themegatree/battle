const express = require('express')
const app = express()
const port = 3000
const Attack = require('./js functionality/attack');
const Game = require('./src/Game');

let game = new Game();

//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/battle',(req,res) => {

  //game = new Game(req.body.p1Name, req.body.p2Name)
  game.start(req.body.p1Name, req.body.p2Name);

  res.render('battle.ejs', {
    p1Name: game.p1.name,
    p2Name: game.p2.name,
    p1hp: game.p1.hp,
    p2hp: game.p2.hp,
    attackLog: ''
  })
})

app.post('/battle-attack',(req,res) => {
  //Other res methods - res.send?
  //console.log('battle attack page')
  game.attack()
  console.log(game.p1.name)
  console.log(game.p2.name)
  console.log(game.attackLog)

  res.render('battle-attack.ejs', {
    p1Name: game.p1.name,
    p2Name: game.p2.name,
    attackLog: game.attackLog
  })
})

// Put the post request into a function?
// app.post('/battle-update', postAttack()
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
