describe('Visit My APP Quiz', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/quiz/');
  });

  it('should have an element with start-app', () => {
    cy.get('[data-testid="start-app"]').should('be.visible');

    cy.get('[data-testid="start-app"]').within(() => {
      cy.get('.start__intro-screen').should('exist');
      cy.get('h1').should('be.visible');
      cy.get('p').should('be.visible');
    });
  });

  it('should have a start button on the page', () => {
    cy.get('#startButton').should('be.visible');
    cy.get('#startButton').should('contain.text', 'Start quiz');
  });

  it('should show a new element on the page after clicking the start button', () => {
    cy.get('#startButton').click();
    cy.get('#accommodationScreen').should('be.visible');
  });

  it('should show the accommodation screen with correct elements after clicking the start button', () => {
    cy.get('#startButton').click();

    cy.get('#accommodationScreen .accommodationIcon').should('be.visible');
    cy.get('#accommodationScreen .accommodationIcon img').should('be.visible');
    cy.get('#accommodationScreen .accommodationIcon h2').should('contain.text', 'Accommodation');
    cy.get('#accommodationScreen .hero__wrapper').should('be.visible');
    cy.get('#accommodationScreen .hero__card-info').should('have.length', 3);
  });

  it('should update the card and button correctly when clicking on a card', () => {
    cy.get('#startButton').click();
    cy.get('[data-testid="info"]').click();

    cy.get('[data-testid="overlay-click"].active').should('exist');
    cy.get('[data-testid="info"] .selected-icon').should('be.visible');
  });

  it('should check that span tags within options-info are visible', () => {
    cy.get('#startButton').click();

    cy.get('[data-testid="options-info"]').should('be.visible');
    cy.get('[data-testid="options-info"]').find('span').should('be.visible');
    cy.get('[data-testid="options-info"]').find('span').each(($el) => {
        cy.wrap($el).should('be.visible');
    });
  });

  it('should verify that the "selectAccommodationButton" is not clickable when no card is selected', () => {
    cy.get('#startButton').click();
    cy.get('#selectAccommodationButton').should('be.disabled');
  });

  it('should enable and click the "selectAccommodationButton" only after selecting a card and redirect to transportScreen', () => {
    cy.get('#startButton').click();
    cy.get('[data-testid="info"]').click();

    cy.get('#selectAccommodationButton').should('not.be.disabled');
    cy.get('#selectAccommodationButton').click();
    cy.get('#transportScreen').should('be.visible');
  });

  it('should navigate to transport screen after selecting accommodation', () => {
    cy.get('#startButton').click();
    cy.get('[data-testid="info"]').click();
    cy.get('#selectAccommodationButton').click();

    cy.get('[data-testid="transportScreen"]').should('be.visible');
  });

  it('should display transport options correctly', () => {
    cy.get('#startButton').click();
    cy.get('[data-testid="info"]').click();
    cy.get('#selectAccommodationButton').click();

    cy.get('.transport__card-info').should('have.length', 3);
    cy.get('.transport__card-info').first().should('contain.text', 'Luxury');
  });

  it('should allow selection of a transport option', () => {
    cy.get('#startButton').click();
    cy.get('[data-testid="info"]').click();
    cy.get('#selectAccommodationButton').click();

    cy.get('.transport__card-info').first().click();
    cy.get('.transport__card-info.selected').should('exist');
  });

  it('should enable selectTransportButton after selecting a transport option', () => {
    cy.get('#startButton').click();
    cy.get('[data-testid="info"]').click();
    cy.get('#selectAccommodationButton').click();

    cy.get('.transport__card-info').first().click();
    cy.get('#selectTransportButton').should('not.be.disabled').click();
  });
});
