xdescribe('Set-up', () => {

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

xdescribe("One Click", () => {

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
    // Have checked number in our unit tests, so do we need to do it here?
    cy.get("#p2-hp")
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
    cy.get("#p1-hp")
  })
  
})

xdescribe("End game screen", () =>{
  beforeEach(() => {
    cy.visit('/');
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click();

     // not real code in the conditions brackets, 
     //just here to explain what we are trying to do
    while (cy.get("#p1-hp".exists)){
      cy.get("#attack-button").click()
    }
  })

  it("ACUS9: Loss Message", ()=> {
    cy.get('#lose-message').should('contain','Colin has beaten Lottie') 
  })

  it("SMUS1: Restart",() => {
    cy.get('#restart').click()
    cy.get("#start")
  })
})


describe("attack types", () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click();
  })

  it("EAUS3: Volley Button", () => {
    cy.get("#volley-button").should('contain', 'Volley');
  })

  it("EAUS6: Sleep Button", () => {
    cy.get("#sleep-button").should('contain', 'Sleep Attack');
  })


})
