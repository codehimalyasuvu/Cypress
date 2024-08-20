import { Login } from "./UserLogin.cy";

describe("Verify Merchants", () => {
  it("Verify when user enter valid details", () => {});
  //UserLogin

  Login();

  cy.get(`a[href ="/merchants"]`).click();
});
