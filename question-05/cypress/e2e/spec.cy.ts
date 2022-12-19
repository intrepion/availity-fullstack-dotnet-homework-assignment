describe("registration", () => {
  it("loads", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "Registration");
  });

  it("successfully shows registration details", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input#firstNameBox").type("John");
    cy.get("button#register").click();
    cy.get("div#registrationStatus h2").should("contain", "Registration Details");
    cy.get("div#registrationStatus p#firstNameStatus").should("contain", "First Name: John");
  });

  it("errors when there is a missing first name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#firstNameError").should("contain", "Please enter the first name.");
    cy.get("div#registrationStatus").should("not.exist");
  });

  it("errors when there is a missing last name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#lastNameError").should("contain", "Please enter the last name.");
    cy.get("div#registrationStatus").should("not.exist");
  });
});
