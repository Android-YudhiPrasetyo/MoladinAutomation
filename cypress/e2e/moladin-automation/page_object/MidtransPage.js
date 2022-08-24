class Midtrans  {
    visit() {
        console.log('hello world')
        cy.visit('https://demo.midtrans.com/')
    }
}

export default Midtrans