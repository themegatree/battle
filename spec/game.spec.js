const Game = require('../src/Game')

class TestPlayer {
   constructor(){
     this.name = ''; 
     this.hp = 100;
   }
   setName(name) {
     this.name = name;
   }
}

class TestAttack {
    basicAttack() {return 10}
    volleyAttack() {return 27}
 }

describe("Game Spec: Set-up: ", () => {
    beforeEach(() => {
        game = new Game(TestPlayer, TestAttack)
        game.start('Colin', 'Lottie')
    })

    it('create players with names', () => {
        expect(game.p1.name).toEqual('Colin')
    })

    it('alocate 100hp each', () => {
        expect(game.p1.hp).toEqual(100)
    })
})


describe('GameSpec: Basic Attacks', () => {

    let game
    beforeEach(() => {
        game = new Game(TestPlayer, TestAttack)
        game.start('Colin', 'Lottie')
    })

    it('attack reduces hp by 10', () => {

        game.basicAttack()
        expect(game.p2.hp).toEqual(90)
    })

    it('switches turn after attack', () =>{
        game.switchTurn()
        expect(game.turnTracker[0].name).toEqual('Lottie')
    })

    it('switching changes who attacks who', () =>{

        game.switchTurn()
        game.basicAttack()
        expect(game.p1.hp).toEqual(90)
    })

    it('reach 0HP display lose message',()=>{

        game.p2.hp = 10;
        game.basicAttack(); //p1 attacks
        expect(game.gameStatus).toEqual(false);
    })
})

describe('GameSpec: Volley Attacks', () => {

    let game
    beforeEach(() => {
        game = new Game(TestPlayer, TestAttack)
        game.start('Colin', 'Lottie')
    })

    it('attack reduces hp by 10', () => {

        game.volleyAttack()
        expect(game.p2.hp).toEqual(73)
    })

    it('switching changes who attacks who', () =>{

        game.switchTurn()
        game.volleyAttack()
        expect(game.p1.hp).toEqual(73)
    })

    it('reach 0HP display lose message',()=>{

        game.p2.hp = 23;
        game.volleyAttack(); //p1 attacks
        expect(game.gameStatus).toEqual(false);
    })
})