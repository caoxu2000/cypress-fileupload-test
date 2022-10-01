/// <reference types="Cypress" />
/// <reference types="cypress-downloadfile"/>

describe('File Upload Test', () => {
  it('should upload the file', () => {
    cy.visit('https://trytestingthis.netlify.app/')

    cy.get('#myfile').attachFile('example.json')
  })

  it('should download the file', () => {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','cypress/downloads','example.jpg')

  })
})