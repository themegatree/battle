const Game = require('../src/Game')


describe('Battle Game logic', () => {

    let game
    beforeEach(() => {
        game = new Game()
        game.start('Lottie', 'colin')
        return game
    })
   
    
    it('create players with names', () => {
        expect(game.p1.name).toEqual('Lottie')
    })

    it('alocate 100hp each', () => {

        expect(game.p1.hp).toEqual(100)
    })
    it('attack reduces hp by 10', () => {
        game.attack()
        expect(game.p2.hp).toEqual(90)
    })
})