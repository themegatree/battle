class Attack {
    constructor(){}
    
    randomDamage(a,b) {
        return a + Math.floor(Math.random() * (b + 1 - a));
    }

    basicAttack() {return this.randomDamage(8,12)}

    volleyAttack() {return this.randomDamage(1,4) + this.randomDamage(1,4) + this.randomDamage(1,4)}
 }

 module.exports = Attack;