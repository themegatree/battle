class Game{
    constructor(){
        this.p1 = {
            name: '',
            hp: 100
        };
        this.p2 = {
            name: '',
        hp: 100
        };
        this.attackLog = [];
        // whoevers in pos 0 its their turn
        this.turnTracker = []
        this.gameStatus = true;
    }

    start (p1,p2) {
        this.p1.name = p1;
        this.p2.name = p2;
        this.turnTracker = [this.p1,this.p2]
        this.attackLog = [];
    }

    attack () {
        this.turnTracker[1].hp -= 10
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