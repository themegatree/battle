const Player = require('../src/Player')

describe('Battle Game logic', () => {

    let player
    beforeEach(() => {
        player = new Player()
    })

    it('set player name', () => {
      player.setName('Shiv')
      expect(player.name).toEqual('Shiv');
    })
  })