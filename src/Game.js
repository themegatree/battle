const Player = require('./Player.js')
const Attack = require('./Attack.js')

class Game{
    constructor(playerClass = Player, attackClass = Attack){
        this.p1 = new playerClass();
        this.p2 = new playerClass();
        
        // {
        //     name: '',
        //     hp: 100
        // };
        // this.p2 = {
        //     name: '',
        // hp: 100
        // };

        this.attackLog = [];
        // whoevers in pos 0 its their turn
        this.turnTracker = []
        this.gameStatus = true;

        this.attackClass = new attackClass();
    }

    start (p1,p2) {
        this.p1.setName(p1);
        this.p2.setName(p2);

        this.turnTracker = [this.p1,this.p2]
        this.attackLog = [];
    }

    randomDamage(a,b) {
        return a + Math.floor(Math.random() * (b + 1 - a));
    }

    //basicattack
    //rangeattack
    //poisonattack
    //etc.

    attack () {
        this.turnTracker[1].hp -= this.attackClass.basicAttack();

        this.attackLog.push(`${this.turnTracker[0].name} attacks ${this.turnTracker[1].name}`)

        if (this.turnTracker[1].hp < 1) {
            return this.lose()
        }
        //Happen at end
         this.switchTurn()
    }   

    lose () {
        this.gameStatus = false;
    }

    switchTurn() {this.turnTracker.reverse()}
}

module.exports = Game;