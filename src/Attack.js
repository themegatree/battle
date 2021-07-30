class Attack {
    constructor(){}
    
    randomDamage(a,b) {
        return a + Math.floor(Math.random() * (b + 1 - a));
    }

    basicAttack() {
        return this.randomDamage(8,12)
        //return 8 + Math.floor(Math.random() * (12 + 1 - 1));
    }

    volleyAttack() {return this.randomDamage(1,4) + this.randomDamage(1,4) + this.randomDamage(1,4)}

    sleepAttack() {return this.randomDamage(1,3)}
 }

 module.exports = Attack;