describe('Prueba básica', () => {
    it('Debería visitar Google y verificar el título', () => {
      cy.visit('https://www.google.com');
      cy.title().should('include', 'Google');
    });
  });
  