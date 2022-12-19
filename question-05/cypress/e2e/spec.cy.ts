describe("registration", () => {
  it("loads", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "Registration");
  });

  it("successfully shows registration details", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input#firstAndLastNameBox").type("John Doe");
    cy.get("input#npiNumberBox").type("1234567890");
    cy.get("textarea#businessAddressBox").type(
      "123 Main St{enter}Beverly Hills, CA 90210"
    );
    cy.get("input#telephoneNumberBox").type("123-456-7890");
    cy.get("input#emailAddressBox").type("some@email.com");
    cy.get("button#register").click();
    cy.get("div#registrationStatus").should("exist");
    cy.get("div#registrationStatus p#firstAndLastNameStatus").should(
      "contain",
      "First And Last Name: John Doe"
    );
    cy.get("div#registrationStatus p#npiNumberStatus").should(
      "contain",
      "NPI Number: 1234567890"
    );
    cy.get("div#registrationStatus p#businessAddressStatus").should(
      "contain",
      "Business Address: 123 Main St\nBeverly Hills, CA 90210"
    );
    cy.get("div#registrationStatus p#telephoneNumberStatus").should(
      "contain",
      "Telephone Number: 123-456-7890"
    );
    cy.get("div#registrationStatus p#emailAddressStatus").should(
      "contain",
      "Email Address: some@email.com"
    );
  });

  it("errors when there is a missing first and last name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#firstAndLastNameError").should("contain", "Please enter first and last name.");
    cy.get("div#registrationStatus").should("not.exist");
  });

  it("errors when there is an invalid NPI number", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#npiNumberError").should(
      "contain",
      "Please enter valid NPI number."
    );
    cy.get("div#registrationStatus").should("not.exist");
  });

  it("errors when there is a missing business address", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#businessAddressError").should(
      "contain",
      "Please enter business address."
    );
    cy.get("div#registrationStatus").should("not.exist");
  });

  it("errors when there is a missing telephone number", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#telephoneNumberError").should(
      "contain",
      "Please enter telephone number."
    );
    cy.get("div#registrationStatus").should("not.exist");
  });

  it("errors when there is a missing email address", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#register").click();
    cy.get("span#emailAddressError").should(
      "contain",
      "Please enter email address."
    );
    cy.get("div#registrationStatus").should("not.exist");
  });
});
