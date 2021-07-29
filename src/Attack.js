class Attack {
    constructor(){}
    
    randomDamage(a,b) {
        return a + Math.floor(Math.random() * (b + 1 - a));
    }

    basicAttack() {return this.randomDamage(8,12)}
 }

 module.exports = Attack;