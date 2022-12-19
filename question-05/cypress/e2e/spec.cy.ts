describe("registration", () => {
  it("loads", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "Registration");
  });

  it("successfully shows registration details", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input#firstNameBox").type("John");
    cy.get("input#lastNameBox").type("Doe");
    cy.get("input#npiNumberBox").type("1234567890");
    cy.get("button#register").click();
    cy.get("div#registrationStatus").should("exist");
    cy.get("div#registrationStatus p#firstNameStatus").should(
      "contain",
      "First Name: John"
    );
    cy.get("div#registrationStatus p#lastNameStatus").should(
      "contain",
      "Last Name: Doe"
    );
    cy.get("div#registrationStatus p#npiNumberStatus").should(
      "contain",
      "NPI Number: 1234567890"
    );
  });

  it("errors when there is a missing first name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#firstNameError").should(
      "contain",
      "Please enter first name."
    );
    cy.get("div#registrationStatus").should("not.exist");
  });

  it("errors when there is a missing last name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#lastNameError").should(
      "contain",
      "Please enter last name."
    );
    cy.get("div#registrationStatus").should("not.exist");
  });

  it("errors when there is a missing NPI number", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#npiNumberError").should(
      "contain",
      "Please enter valid NPI number."
    );
    cy.get("div#registrationStatus").should("not.exist");
  });
});
