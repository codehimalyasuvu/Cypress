import { Login } from "./credentials.cy";

describe("User Login ", () => {
  it("Verify when user enter valid details", () => {
    Login();
    cy.wait(100);
  });

  it("Verify when user enter invalid password", () => {
    //Invalid Username
    if (validUser == invalidUsername && validPassword == invalidPassword) {
      Login(validUser, validPassword);
    } else {
      Login(invalidUsername, invalidPassword);
      cy.get(".go3958317564").contains(
        "User details not found. Please contact operator."
      );
    }
    Login(("gateway", "dkjlkdd"));
    cy.wait(400);
  });
});
