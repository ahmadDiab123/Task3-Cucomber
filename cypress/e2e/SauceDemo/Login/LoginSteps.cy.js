import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";



Given("the user navigates to the login page", () => {
    cy.visit("/");
});

When("the user types {string} in username field", (username) => {
    cy.get('[data-test="username"]').type(username);
});

When("the user types {string} in password field", (password) => {
    cy.get('[data-test="password"]').type(password);
});

When("the user clicks the login button", () => {
    cy.get('[data-test="login-button"]').click();
});

Then("the user should be redirected to the inventory page", () => {
    cy.url().should("include", "/inventory.html");
});



When('the user logs in with {string} and {string}', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});

When('the user adds {string} to the cart', (productName) => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When('the user starts the checkout process', () => {
    cy.get('.shopping_cart_link').click(); 
    cy.get('[data-test="checkout"]').click();
});

Then('the user should see the checkout information page', () => {
    cy.url().should('include', '/checkout-step-one.html');
});


When('the user fills the checkout information', () => {
    cy.get('[data-test="firstName"]').type("ahmad");
    cy.get('[data-test="lastName"]').type("diab");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();
});


When('the user finishes the order', () => {
    cy.get('[data-test="finish"]').click();
});


Then('the user should see the order completion message', () => {
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
    cy.url().should('include', '/checkout-complete.html');
});


When('the user clicks on the logout button', () => {

    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});

Then('the user should be redirected back to the login page', () => {
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.url().should('eq', 'https://www.saucedemo.com/');
});