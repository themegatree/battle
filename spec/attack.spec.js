const Attack = require('../src/Attack.js')

describe('Attack Logic', () => {

    let player
    beforeEach(() => {
        attack = new Attack()
    })

    it('Output basic attack', () => {
        spyOn(attack,'randomDamage').and.callFake(function(a,b){
            return 10;
            });
        expect(attack.basicAttack()).toEqual(10)
    })

    it('Output volley attack', () => {
        spyOn(attack,'randomDamage').and.callFake(function(a,b){return 3});        
        expect(attack.volleyAttack()).toEqual(9)
    })

    it('Output sleep attack', () => {
        spyOn(attack,'randomDamage').and.callFake(function(a,b){return 1});        
        expect(attack.sleepAttack()).toEqual(1)
    })

    it('', () => {
        
    })

  })