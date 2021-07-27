describe('battle game user interactions', () => {
  it('getting players names', () => {
    cy.visit('/')
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click()
    // change to new page
    cy.get("#p1-display-name").should('contain','Colin')
    cy.get("#p2-display-name").should('contain','Lottie')
  });
  it('shows starting hitpoints' , () => {
    cy.visit('/battle')
    cy.get("#p1-hp").should('contain', '100');
    cy.get("#p2-hp").should('contain', '100');
  })
  it('shows confirmation of attack' , () => {
    cy.visit('/battle')
    cy.get('#attack').click()
    cy.get("#p1-attack-notify").should('contain', 'player 1 attacked player 2')
  })
});
