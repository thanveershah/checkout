/// <reference types="cypress" />

describe('Initial Test', () => {
   it('Toggle Theme', () => {
      cy.visit('/');

      cy.wait(1000);
      cy.get('header button').click();
      cy.wait(1000);
      cy.get('header button').click();
   });

   it('Fill the form', () => {
      cy.wait(1000);
      cy.get('form').scrollIntoView();
      cy.get('input[name=name]').type('Thanveer Shah');
      cy.get('input[name=email]').type('thanveershah92@gmail.com');
      cy.get('.fa-star').eq(3).click();
      cy.get('textarea[name=comment]').type('Sony is a really good product, I would recommend everyone to buy it');
      cy.get('form').scrollIntoView();
      cy.wait(1000);
      cy.get('button[type=button]').click();
   });

   it('See All The Comments', () => {
      cy.wait(1000);
      cy.get('.list-comments-container').scrollIntoView();
   });
});
