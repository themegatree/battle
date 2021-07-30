const Attack = require('../src/Attack.js')

describe('Attack Logic', () => {

    let player
    beforeEach(() => {
        attack = new Attack()
    })

    it('Output attack number', () => {
        spyOn(attack,'randomDamage').and.callFake(function(a,b){
            return 10;
            });
        expect(attack.basicAttack()).toEqual(10)
    })

    it('Output attack number', () => {
        spyOn(attack,'randomDamage').and.callFake(function(a,b){return 3});        
        expect(attack.volleyAttack()).toEqual(9)
    })
  })