export function Login(username = "gateway-admin", password = "pgadm1n@!23") {
  cy.visit("/gateway/login/");
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get(".chakra-stack > .chakra-button").click();
}
