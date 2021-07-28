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
        //this.turn = 2 (1 or 2)
    }

  start (p1,p2) {
      this.p1.name = p1;
      this.p2.name = p2;
      this.p1.hp = 100;
      this.p2.hp = 100;
      this.attackLog = [];
  }

  attack () {
  //console.log("Attack!")
  this.attackLog.push(`${this.p1.name} attacks ${this.p2.name}`)
  //return `${this.p1.name} attacks ${this.p2.name}`
    }    

}

module.exports = Game