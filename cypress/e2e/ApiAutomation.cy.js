describe('API Automation with Cypress', function(){

  it('Verify Get List User is return 200', ()=>{
      cy.request({
          method : 'GET',
          url : 'https://reqres.in/api/users?page=2',
          headers : {

          }

      }).then((response)=> {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.not.be.empty;
      })
  })

  it('Verify Get Single User is return 200', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/users/2',
        headers : {

        }

    }).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.not.be.empty;
        expect(response.body.data).to.have.property('id')
    })
  })

  it('Verify Get Single User not Found is return 404', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/users/23',
        failOnStatusCode: false,
        headers : {

        }

    }).then((response)=> {
        expect(response.status).to.eq(404);
        expect(response.body).to.deep.equal({})
    })
  })

  it('Verify Get List <Resource> is return 200', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/unknown',
        headers : {

        }

    }).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.not.be.empty;
    })
  })

  it('Verify Get Single <Resource> is return 200', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/unknown/2',
        headers : {

        }

    }).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.not.be.empty;
    })
  })

  it('Verify Get Single <Resource> not Found is return 404', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/unknown/23',
        failOnStatusCode: false,
        headers : {

        }

    }).then((response)=> {
        expect(response.status).to.eq(404);
        expect(response.body).to.deep.equal({})
    })
  })

  it('Verify Post Create user is return 201', ()=>{
    cy.request({
        method : 'POST',
        url : 'https://reqres.in/api/users',
        body : {
          "name": "morpheus",
          "job": "leader"
        }

    }).then((response)=> {
        expect(response.status).to.eq(201);
        expect(response.body).has.property('name', 'morpheus')
        expect(response.body).has.property('job', 'leader')
    })
  })

  it('Verify Put Update user is return 200', ()=>{
    cy.request({
        method : 'PUT',
        url : 'https://reqres.in/api/users/2',
        body : {
          "name": "morpheus",
          "job": "zion resident"
        }

    }).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body).has.property('name', 'morpheus')
        expect(response.body).has.property('job', 'zion resident')
    })
  })

  it('Verify Patch Update user is return 200', ()=>{
    cy.request({
        method : 'PATCH',
        url : 'https://reqres.in/api/users/2',
        body : {
          "name": "morpheus",
          "job": "zion resident"
        }

    }).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body).has.property('name', 'morpheus')
        expect(response.body).has.property('job', 'zion resident')
    })
  })

  it('Verify Delete Update user is return 204', ()=>{
    cy.request({
        method : 'DELETE',
        url : 'https://reqres.in/api/users/2',
        failOnStatusCode: false

    }).then((response)=> {
        expect(response.status).to.eq(204);
    })
  })

  it('Verify Register Successful is return 200', ()=>{
    cy.request({
        method : 'POST',
        url : 'https://reqres.in/api/register',
        body : {
          "email": "eve.holt@reqres.in",
          "password": "pistol"
        }

    }).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body).has.property('id')
        expect(response.body).has.property('token')
    })
  })

  it('Verify Register Unsuccessful is return 400', ()=>{
    cy.request({
        method : 'POST',
        url : 'https://reqres.in/api/register',
        failOnStatusCode: false,
        body : {
          "email": "eve.holt@reqres.in"
        }

    }).then((response)=> {
        expect(response.status).to.eq(400);
    })
  })

  it('Verify Login Successful is return 200', ()=>{
    cy.request({
        method : 'POST',
        url : 'https://reqres.in/api/login',
        body : {
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
        }

    }).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body).has.property('token')
    })
  })

  it('Verify Login Unsuccessful is return 400', ()=>{
    cy.request({
        method : 'POST',
        url : 'https://reqres.in/api/login',
        failOnStatusCode: false,
        body : {
          "email": "eve.holt@reqres.in",
        }

    }).then((response)=> {
        expect(response.status).to.eq(400)
    })
  })
  
  it('Verify Get Delay Response is return 200', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/users?delay=3',

    }).then((response)=> {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.not.be.empty;
    })
  })



})