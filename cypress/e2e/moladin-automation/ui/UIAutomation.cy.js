/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-iframe')

import { BASE_URL_Midtrans, MidtransPillow, Name, Email, PhoneNo, City, Address, PostalCode, CardNumber,
	ExpirationDate, CVV, Passcode } from '../../../config'

import MidtransPage from '../page_object/MidtransPage'


describe('Automation Web Demo Midtrans', () => {
  beforeEach(() => {
   cy.visit('https://demo.midtrans.com/')
  })

	after(function() {
		cy.clearCookies({ log: true })
	})

  it('Verify user can do transaction successfully', () => {
    cy.get('.buy').click();
    cy.get('.cart-checkout').click()

    cy.frameLoaded('#snap-midtrans')
    const iFrame = cy.get('#snap-midtrans')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)
    iFrame.contains('Credit/debit card').click()

    cy.frameLoaded('#snap-midtrans')
    cy.iframe().xpath("//input[@autocomplete='cc-number']")
    .type(4811111111111114)
    cy.iframe()
      .xpath("//input[@id='card-expiry']")
      .type('0125')
    cy.iframe()
      .xpath('//*[@id="card-cvv"]')
      .type('123')
    cy.iframe()
      .xpath("//button[contains(text(), 'Pay now')]")
      .click()

      cy.frameLoaded('#snap-midtrans')
      cy.iframe()
      .find('#app')
      .find('.iframe-3ds')
      .its('0.contentDocument.body')
      .xpath('//*[@id="PaRes"]')
      .type(Passcode)
      cy.iframe().find('#app').find('.iframe-3ds').its('0.contentDocument.body').contains('OK').click()

    
  })
  
})


