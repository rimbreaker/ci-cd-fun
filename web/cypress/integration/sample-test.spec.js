describe('My First Test', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('http://localhost:3000')
      })

    
    it('Does not do much!', () => {
        // eslint-disable-next-line no-undef
        cy.intercept({
            method:'GET',
            url:'https://ci-cd-back.herokuapp.com:3030/api/color/aabbcc',
            
        },{name:'blue'})

        // eslint-disable-next-line no-undef
        cy.get('p').should('have.text','blue')
        // eslint-disable-next-line no-undef
        cy.intercept({
            method:'GET',
            url:'https://ci-cd-back.herokuapp.com:3030/api/color/406080',
            
        },{name:'red'})

        // eslint-disable-next-line no-undef
       cy.get('.react-colorful__saturation > .react-colorful__interactive').click()
       
        // eslint-disable-next-line no-undef
       cy.get('p').should('have.text','red')
    })
  })