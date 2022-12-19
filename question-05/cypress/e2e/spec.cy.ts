describe("registration", () => {
  it("loads", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "Registration");
  });

  it("errors when there is a missing first name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#firstNameError").should("contain", "Please enter the first name.");
  });
});