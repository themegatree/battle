const express = require('express');
const router = express.Router();
const Game = require('../src/Game');

router.post('/',(req,res) => {
    const game = new Game();
    game.start(req.body.p1Name, req.body.p2Name);
    req.app.locals.game = game;

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

module.exports = router;
