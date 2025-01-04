import { cart } from '../fixtures/cart-games.json'

describe('Cart Page', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('DOMAIN')}/cart`)

    window.localStorage.setItem('cart', JSON.stringify(cart))
  })

  it('First Render', () => {
    cy.get('h1').should('contain', 'Your Cart').should('exist')
  })
})
