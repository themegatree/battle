class Game{
    constructor(p1,p2){
        this.p1 = {
            name: p1,
            hp: 100
        };
        this.p2 = {
            name: p2,
            hp: 100
        };
    }
}

module.exports = Game