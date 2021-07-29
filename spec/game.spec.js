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
 }


describe('Battle Game logic', () => {

    let game
    beforeEach(() => {
        game = new Game(TestPlayer, TestAttack)
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
        spyOn(game,'randomDamage').and.callFake(function(a,b){
          return 10;
        });

        game.attack()
        expect(game.p2.hp).toEqual(90)
    })

    it('switches turn after attack', () =>{
        game.switchTurn()
        expect(game.turnTracker[0].name).toEqual('Lottie')
    })

    it('switching changes who attacks who', () =>{
        spyOn(game,'randomDamage').and.callFake(function(a,b){
            return 10;
            });

        game.switchTurn()
        game.attack()
        expect(game.p1.hp).toEqual(90)
    })

    it('reach 0HP display lose message',()=>{
        spyOn(game,'randomDamage').and.callFake(function(a,b){
                return 10;
                });

        game.p2.hp = 10;
        game.attack(); //p1 attacks
        expect(game.gameStatus).toEqual(false);
    })



})