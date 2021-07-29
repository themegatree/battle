describe('Set-up', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click();
  })

  it("ACUS1: See names", () => {
    cy.get("#p1-display-name").should('contain','Colin')
    cy.get("#p2-display-name").should('contain','Lottie')
  })


  it("ACUS2: See Opponent HP", () => {
    cy.get("#p2-hp").should('contain', 'Player 2 hp: 100');
  })

  it("ACUS6: See My HP", () => {
    cy.get("#p1-hp").should('contain', 'Player 1 hp: 100');
  })
})

describe("One Click", () => {


  beforeEach(() => {
    cy.visit('/');
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click();
    cy.get("#attack-button").click();
  })


  it("ACUS3: Confirm Hit", () => {
    cy.get("#attack-log").should('contain','Colin attacks Lottie');
  })

  it("ACUS4: Confirm HP lose", () => {
    cy.get("#p2-hp").should('contain', 'Player 2 hp: 90')
  })

  it("ACUS5: Confirm Hit", () => {
    cy.get("#attack-log").should('contain','Colin attacks Lottie');
  })

  it("ACUS7: P2 attack confirmation", () => {
    cy.get("#attack-button").click();
    cy.get("#attack-log").should('contain','Lottie attacks Colin');
  })

  it("ACUS8: P1 HP reduction", () => {
    cy.get("#attack-button").click();
    cy.get("#p1-hp").should('contain', 'Player 1 hp: 90')
  })
  

})

describe("End game screen", () =>{
  beforeEach(() => {
    cy.visit('/');
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click();
    for (let i=0; i< 19; i++){cy.get("#attack-button").click()};
  })

  it("ACUS9: Loss Message", ()=> {
    cy.get('#lose-message').should('contain','Colin has beaten Lottie') 
  })

  it("SMUS1: Restart",() => {})
})
//   it('starts a new game (it does loads of stuff in the same it unfortuanelty)', () => {

//    // ***** <NEW IT> wish they could be seperate its ******
     
//     // ***** <NEW IT> wish they could be seperate its ******



//     // ***** <NEW IT> wish they could be seperate its ******

//     cy.get('#turn-tracker').should('contain','Lottie')
//     cy.get("#attack-button").click();
//     cy.get('#turn-tracker').should('contain','Colin')
//     cy.get("#attack-log").should('contain','Lottie attacks Colin');

//     // ***** <NEW IT> wish they could be seperate its ******
//     // In separate IT change 17 to 19. 
//     for (let i = 0; i < 17; i++){
//       cy.get("#attack-button").click();
//     }
//     cy.get('#lose-message').should('contain','Colin has beaten Lottie')        
//   });




//   // it('shows starting hitpoints' , () => {
//   //   cy.visit('/battle')
//   //   cy.get("#p1-hp").should('contain', 'Player 1 hp: 100');
//   //   cy.get("#p2-hp").should('contain', 'Player 2 hp: 100');
//   // })

//   // it('shows confirmation of attack' , () => {
//   //   cy.visit('/battle')
//   //   cy.get('#attack').click()
//   //   cy.get("#p1-attack-notify").should('contain', 'player 1 attacked player 2')
//   // })
// // });
