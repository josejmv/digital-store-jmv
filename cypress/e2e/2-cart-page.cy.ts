import { cart } from '../fixtures/cart-games.json'

describe('Cart Page', () => {
  beforeEach(() => {
    cy.visit('/cart')

    window.localStorage.setItem('cart', JSON.stringify(cart))
  })

  it('First Render', () => {
    cy.get('h1').should('contain', 'Your Cart').should('exist')
  })

  it('Verify List Of Games', () => {
    cy.get('h1').should('contain', 'Your Cart').should('exist')
    cy.get('div').should(
      'have.class',
      'w-full md:w-1/2 lg:w-2/3 flex flex-col gap-4'
    )
    cart.forEach((game) => {
      cy.contains(game.name).should('exist')
      cy.contains(game.price).should('exist')
    })
  })

  it('Verify Summary', () => {
    cy.get('h2').should('contain', 'Order Summary').should('exist')
    cy.get('p').contains(`${cart.length} Items`).should('exist')
    const totalPrice = cart.reduce((total, game) => total + game.price, 0)
    cy.get('p').contains(`Order total`).should('exist')
    cy.get('p').contains(`${totalPrice}$`).should('exist')
  })
})
