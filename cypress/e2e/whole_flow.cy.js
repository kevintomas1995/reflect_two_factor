/// <reference types="cypress" />

describe("Whole Authentification Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should successfully verify with correct credentials and correct url parameters", () => {
    const email = "test@test.com";
    const password = "test";

    cy.intercept("POST", "/api/login").as("login");

    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/confirmation");

    cy.wait("@login").its("request.body").should("deep.equal", {
      email,
      password,
    });

    cy.get("@login").its("response.body").should("deep.equal", {
      success: true,
    });

    cy.get("p[id=error]").should("not.exist");

    cy.task("getMail").then((mail) => {
      cy.intercept("POST", "/api/verify").as("verify");

      const recievedUrl = mail.body;

      cy.visit(recievedUrl);

      cy.wait("@verify").its("request.body").should("deep.equal", {
        email: "test@test.com",
        verificationCode: "12345",
      });

      cy.get("@verify").its("response.body").should("deep.equal", {
        success: true,
      });

      cy.get('p[id="success"]').should("be.visible");
    });
  });
});
