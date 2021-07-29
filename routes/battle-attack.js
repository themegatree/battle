const express = require('express');
const router = express.Router();

router.post('/',(req,res) => {
  const game = req.app.locals.game;
  game.attack()

  if (game.gameStatus === false) {
    res.render('results.ejs', {
      outcome: `${game.turnTracker[0].name} has beaten ${game.turnTracker[1].name}`
    })

  } else {
    res.render('battle.ejs', {
      p1Name: game.p1.name,
      p2Name: game.p2.name,
      p1hp: game.p1.hp,
      p2hp: game.p2.hp,
      attackLog: game.attackLog,
      turnName: game.turnTracker[0].name,
      gameStatus: `The game is in progress: ${game.gameStatus.toString()}`
    })
  }



})

module.exports = router