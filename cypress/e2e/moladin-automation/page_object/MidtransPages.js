require('cypress-xpath')
require('cypress-iframe')

export default class MidtransPage  {
static visit() {
        cy.visit('https://demo.midtrans.com/')
    }

    static buttonBuyNow() {
		cy.get('.buy').click()
		cy.wait(2000)
}

	static inputMidtransPillow(MidtransPillow) {
		cy.get('input[class="text-right"]').focus().type("{selectall}").type(MidtransPillow)
		cy.wait(2000)
	}

	static inputName(Name) {
		cy.xpath("//input[@value='Budi']").clear().type(Name)
		cy.wait(2000)
	}

	static inputEmail(Email) {
		cy.xpath("//input[@value='budi@utomo.com']").clear().type(Email)
		cy.wait(2000)
	}

	static inputPhoneNo(PhoneNo) {
		cy.xpath("//input[@value='081808466410']").clear().type(PhoneNo)
		cy.wait(2000)
	}

	static inputCity(City) {
		cy.xpath("//input[@value='Jakarta']").clear().type(City)
		cy.wait(2000)
	}

	static inputAddress(Address) {
		cy.get('textarea').clear().type(Address)
		cy.wait(2000)
	}

	static inputPostalCode(PostalCode) {
		cy.xpath("//input[@value='10220']").clear().type(PostalCode)
		cy.wait(2000)
	}

	static buttonCheckout() {
		cy.xpath("//div[@class='cart-checkout']").click()
		cy.wait(2000)
	}

	static ChooseCreditCard() {
		cy.get('#snap-midtrans').its('0.contentDocument.body')
    	.contains('Credit/debit card')
    	.click({force: true})
		cy.wait(2000)
	}

	static ChooseCreditCard() {
		cy.get('#snap-midtrans').its('0.contentDocument.body')
    	.contains('Credit/debit card')
    	.click({force: true})
		cy.wait(2000)
	}

	static inputCardNumber(CardNumber) {
		cy.get('#snap-midtrans')
		.its('0.contentDocument.body')
		.xpath("//input[@autocomplete='cc-number']")
		.type(CardNumber)
		.should('have.value', '4811 1111 1111 1114');
	  	cy.wait(1000)
	}

	static inputCardNumberFailed(CardNumber) {
		cy.get('#snap-midtrans')
		.its('0.contentDocument.body')
		.xpath("//input[@autocomplete='cc-number']")
		.type(CardNumber)
		.should('have.value', '4811 1111 1111 1111');
	  	cy.wait(1000)
	}

	static inputExpirationDate(ExpirationDate) {
		cy.get('#snap-midtrans')
		.its('0.contentDocument.body')
		.xpath("//input[@id='card-expiry']")
		.type(ExpirationDate)
		.should('have.value', '02/23');
	  	cy.wait(1000)
	}

	static inputCVV(CVV) {
		cy.get('#snap-midtrans')
		.its('0.contentDocument.body')
		.xpath('//*[@id="card-cvv"]')
		.type(CVV)
		.should('have.value', '123')
	  	cy.wait(1000)
	}

	static buttonPayNow() {
		cy.get('#snap-midtrans')
		.its('0.contentDocument.body')
		.contains('Pay now')
		.click({force: true})
	  	cy.wait(2000)
	}

	static inputPasscode(Passcode) {
		cy.frameLoaded('#snap-midtrans')
		cy.iframe()
		.find('#app')
		.find('.iframe-3ds')
		.its('0.contentDocument.body')
		.xpath('//*[@id="PaRes"]')
		.type(Passcode)
		cy.iframe().find('#app').find('.iframe-3ds').its('0.contentDocument.body').contains('OK').click()
	}

	static informationCardNumberCorrect() {
		cy.get('#snap-midtrans')
		.its('0.contentDocument.body');
		cy.contains('Make sure your card number are correct.')
	}

	static btnOk() {
		cy.frameLoaded('#snap-midtrans')
		cy.iframe()
		.find('#app')
		.find('.iframe-3ds')
		.its('0.contentDocument.body')
		.contains('OK')
		.click()
	}

	static ValidatePaymentSuccess() {
		cy.frameLoaded('#snap-midtrans')
		cy.iframe().contains('Your transaction is being processed')
		cy.iframe().contains("Back to merchant's web").click()
		cy.wait(1000)
		cy.contains('Thank you for your purchase.')
		cy.contains('Get a nice sleep.')
	}
}
