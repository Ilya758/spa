describe('Navigation', () => {
  it('should navigate from home page to some others', () => {
    cy.visit('/');

    cy.get('a[href*="about"]').click();

    cy.url().should('include', '/about');

    cy.get('p').contains('About Us');

    cy.get('a[href*="blog"]').first().click({ multiple: false });

    cy.url().should('include', '/blog');

    cy.get('p').contains('The Bark Chronicles');

    cy.get('a[href*="spa-services"]').first().click();

    cy.url().should('include', '/spa-services');

    cy.get('p').contains('Spa Services');
  });
});

describe('Search module', () => {
  it('should navigate to the info page, finds search bar and type a query', () => {
    cy.visit('/');

    cy.get('a[href*="info"]').first().click();

    cy.url().should('include', '/info');

    cy.get('[data-cy="dog-search"]')
      .type('123')
      .wait(500)
      .clear()
      .type('collie bor');

    cy.get('p').contains('Border Collie');
  });
});

describe('Booking', () => {
  it('should find all of the related fields, fill the form get a valid result', () => {
    cy.visit('/book');

    cy.get('[data-cy="firstName"]').type('Illia');

    cy.get('[data-cy="lastName"]').type('Test');

    cy.get('[data-cy="email"]').type('test@gmail.com');

    cy.get('[data-cy="phone"]').type('375333333321');

    cy.get('label').first().click();

    cy.get('label').eq(3).click();

    cy.get('[data-cy="button-next"]').wait(500).click().click();

    cy.get('td').eq(5).wait(500).click();

    cy.get('textarea').type('Some message.');

    cy.get('[data-cy="button-submit"]').click();

    cy.get('p').contains('Detailed information');

    cy.wait(1000);

    cy.get('[data-cy="button-confirm"]').click();
  });
});

export {};
