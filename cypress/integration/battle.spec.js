describe('battle game user interactions', () => {
  it('getting players names', () => {
    cy.visit('/')
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click()
    cy.get("#p1-hit")
  });

});
