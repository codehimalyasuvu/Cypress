export function Login({ username, password }) {
  cy.visit("https://uat.mo-finance.com/gateway/login/");
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get(".chakra-stack > .chakra-button").click();
}

describe("User Login ", () => {
  it("Verify when user enter valid details", () => {
    Login({ username: "gateway-admin", password: "pgadm1n@!23" });
  });

  it("Verify when user enter invalid username", () => {
    Login({ username: "adsasd", password: "pgadm1n@!23" });
    cy.wait(5);
  });

  it("Verify when user enter invalid password", () => {
    Login({ username: "gateway-admin", password: "asdasd" });
  });
});
