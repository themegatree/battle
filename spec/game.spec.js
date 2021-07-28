const Game = require('../src/Game')


describe('Battle Game logic', () => {

    let game
    beforeEach(() => {
        game = new Game('Richard', 'Colin')
        return game
    })

    
    it('create players with names', () => {
        expect(game.p1.name).toEqual('Richard')
    })

    it('alocate 100hp each', () => {

        expect(game.p1.hp).toEqual(100)
    })
})