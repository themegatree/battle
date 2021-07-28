const Game = require('../src/Game')


describe('Battle Game logic', () => {

    let game
    beforeEach(() => {
        game = new Game()
        game.start('Colin', 'Lottie')
        return game
    })
   
    
    it('create players with names', () => {
        expect(game.p1.name).toEqual('Colin')
    })

    it('alocate 100hp each', () => {

        expect(game.p1.hp).toEqual(100)
    })

    it('attack reduces hp by 10', () => {
        game.attack()
        expect(game.p2.hp).toEqual(90)
    })

    it('switches turn after attack', () =>{
        game.switchTurn()
        expect(game.turnTracker[0].name).toEqual('Lottie')
    })

    it('switching changes who attacks who', () =>{
        game.switchTurn()
        game.attack()
        expect(game.p1.hp).toEqual(90)
    })

    it('reach 0HP display lose message',()=>{
        //const lose () => {'lose'}
        console.log(`Player 2 HP: ${game.p2.hp}`)
        game.p2.hp = 10;
        console.log(`Player 2 HP: ${game.p2.hp}`)
        console.log(game.gameStatus)
        game.attack(); //p1 attacks
        console.log(`Player 2 HP: ${game.p2.hp}`)
        console.log(game.gameStatus)
        expect(game.gameStatus).toEqual(false);
    })



})