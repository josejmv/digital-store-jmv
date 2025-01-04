describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('/api/genres', { fixture: 'genres.json' }).as('genres')
    cy.intercept('/api/games?page=1', { fixture: 'all-games-page-1.json' }).as(
      'allGamesPage1'
    )
    cy.intercept('/api/games?page=2', { fixture: 'all-games-page-2.json' }).as(
      'allGamesPage2'
    )
    cy.intercept('/api/games?page=3', { fixture: 'all-games-page-3.json' }).as(
      'allGamesPage3'
    )
    cy.intercept('/api/games?page=1&genre=RPG', {
      fixture: 'rpg-games.json',
    }).as('rpgGames')

    cy.visit('/')
  })

  it('First Render', () => {
    cy.get('h1').should('contain', 'Top sellers')
    cy.get('button').contains('All')
  })

  it('Genres List', () => {
    cy.get('button').contains('Genre').click()

    cy.wait('@genres').then((req) => {
      expect(req.response?.body.genres).to.have.length(1)
    })

    cy.get('button').contains('RPG').should('exist')
  })

  it('All Games view', () => {
    cy.wait('@allGamesPage1').then((req) => {
      expect(req.response?.body.games).to.have.length(10)
    })

    cy.get('button').contains('Load More').should('exist')
  })

  it('Filtering By Gender', () => {
    cy.wait('@allGamesPage1').then((req) => {
      expect(req.response?.body.games).to.have.length(10)
    })

    cy.get('button').contains('Genre').click()

    cy.wait('@genres').then((req) => {
      expect(req.response?.body.genres).to.have.length(1)
    })

    cy.get('button').contains('RPG').should('exist').click()

    cy.wait('@rpgGames').then((req) => {
      expect(req.response?.body.games).to.have.length(1)
    })
  })

  it('Paginating', () => {
    cy.wait('@allGamesPage1').then((req) => {
      expect(req.response?.body.games).to.have.length(10)
    })

    cy.get('[class^="grid"]').children().should('have.length', 10)

    cy.get('button').contains('Load More').should('exist')
    cy.get('button').contains('Load More').click()

    cy.wait('@allGamesPage2').then((req) => {
      expect(req.response?.body.games).to.have.length(10)
    })

    cy.get('[class^="grid"]').children().should('have.length', 20)

    cy.get('button').contains('Load More').should('exist')
    cy.get('button').contains('Load More').click()

    cy.wait('@allGamesPage3').then((req) => {
      expect(req.response?.body.games).to.have.length(10)
    })

    cy.get('[class^="grid"]').children().should('have.length', 30)

    cy.get('button').contains('Load More').should('not.exist')
  })

  it('Add game to cart', () => {
    cy.wait('@allGamesPage1').then((req) => {
      expect(req.response?.body.games).to.have.length(10)
    })

    cy.get('[class^="grid"]').children().should('have.length', 10)
    cy.get('button').contains('Add To Cart').first().click()
    cy.get('button').contains('Add To Cart').last().click()

    cy.wait(100)

    cy.get('button').contains('Remove').click()

    cy.getAllLocalStorage().then((res) => {
      const parsed = JSON.parse(JSON.stringify(res))[Cypress.env('DOMAIN')]
      expect(parsed).to.have.property('cart')
    })
  })
})
