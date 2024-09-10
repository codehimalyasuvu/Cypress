import { Login } from "./credentials.cy";

function merchants() {
  cy.get(`a[href ="/merchants"]`).click();
}
merchants();

function addMerchant() {
  cy.get("div > p").contains("Add Merchant").click();
}

describe("Verify Merchants", () => {
  it("Verify when user add merchants with valid data", () => {
    //Login
    Login();

    //Navigate to Merchant
    addMerchant();
  });
});
