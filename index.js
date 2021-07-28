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

  game.start(req.body.p1Name, req.body.p2Name);
  console.log('here i am')
  console.log(game.turnTracker)
  console.log(game.turnTracker[0])
  console.log(game.turnTracker[0].name)

  res.render('battle.ejs', {
    p1Name: game.p1.name,
    p2Name: game.p2.name,
    p1hp: game.p1.hp,
    p2hp: game.p2.hp,
    attackLog: game.attackLog,
    turnName: game.turnTracker[0].name,
    gameStatus: `The game is in progress: ${game.gameStatus}`
  })
})
// <p id= turn-tracker> <%= turnName %> you must click attack now </p>
app.post('/battle-attack',(req,res) => {
  //Other res methods - res.send?
  //console.log('battle attack page')
  game.attack()
  // console.log(game.p1.name)
  // console.log(game.p2.name)
  // console.log(game.attackLog)

  // if (game.gameStatus === false) {
  //   lose: game.lose
  // };

  res.render('battle.ejs', {
    p1Name: game.p1.name,
    p2Name: game.p2.name,
    p1hp: game.p1.hp,
    p2hp: game.p2.hp,
    attackLog: game.attackLog,
    turnName: game.turnTracker[0].name,
    gameStatus: `The game is in progress: ${game.gameStatus.toString()}`
  })
})

// Put the post request into a function?
// app.post('/battle-update', postAttack()
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
