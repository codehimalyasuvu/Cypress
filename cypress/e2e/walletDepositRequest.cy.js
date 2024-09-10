import "cypress-file-upload";
import { Login } from "./credentials.cy";

function walletDeposit() {
  cy.get(`a[href ="/wallet-request"]`).click();
}

describe("Verify Wallet Deposit Request", () => {
  it("Verify when user enter valid details", () => {
    //Login
    Login();

    //Navigate to Wallet Deposit Request
    walletDeposit();
    cy.contains(`Request Deposit`).click();
    // cy.get('div > div[class*="-placeholder"] > div:contains("Client Name")').click().type('SNT0002')
    cy.get('div[class*="-placeholder"] > div:contains("Client Name")').click();
    // cy.get('div[class*="-option"]:contains("SNT0002")').click()
    cy.get('div[id="react-select-2-option-8"]').click();
    cy.get("#smsAmount").type("10000");
    cy.get("#topUpAmount").type("10");
    cy.get('div[class*="-placeholder"] > div:contains("Bank Name")').click();
    cy.get('div[id="react-select-3-option-0"]').click();
    cy.get("#accNum").type("123456");
    cy.get("#rechargeDate").type("2024-09-01");
    cy.get('input[type="file"]').as("fileInput");
    cy.fixture("images.jpg").then((fileContent) => {
      cy.get("@fileInput").attachFile({
        fileContent: fileContent.toString(),
        fileName: "images.jpg",
        mimeType: "image/jpg",
      });
    });
    cy.get("#remarks").type("Deposit");
    cy.contains("Submit").click();
    // cy.contains('Cancel').click()
  });

  it("Verify when SMS Amount is Negative", () => {
    Login();
    //Wallet Deposit Request

    walletDeposit();
    cy.contains(`Request Deposit`).click();
    // cy.get('div > div[class*="-placeholder"] > div:contains("Client Name")').click().type('SNT0002')
    cy.get('div[class*="-placeholder"] > div:contains("Client Name")').click();
    // cy.get('div[class*="-option"]:contains("SNT0002")').click()
    cy.get('div[id="react-select-2-option-8"]').click();
    cy.get("#smsAmount").type("-10000");
    cy.get("#topUpAmount").type("-10");
    cy.get('div[class*="-placeholder"] > div:contains("Bank Name")').click();
    cy.get('div[id="react-select-3-option-0"]').click();
    cy.get("#accNum").type("123456");
    cy.get("#rechargeDate").type("2024-09-01");
    cy.get('input[type="file"]').as("fileInput");
    cy.fixture("images.jpg").then((fileContent) => {
      cy.get("@fileInput").attachFile({
        fileContent: fileContent.toString(),
        fileName: "images.jpg",
        mimeType: "image/jpg",
      });
    });
    cy.get("#remarks").type("Deposit");
    cy.contains("Submit").click();
    // cy.contains('Cancel').click()
  });

  it("Verify when Topup Amount is Negative", () => {
    //User Login
    Login();
    //Wallet Deposit Request
    walletDeposit();
    cy.contains(`Request Deposit`).click();
    // cy.get('div > div[class*="-placeholder"] > div:contains("Client Name")').click().type('SNT0002')
    cy.get('div[class*="-placeholder"] > div:contains("Client Name")').click();
    // cy.get('div[class*="-option"]:contains("SNT0002")').click()
    cy.get('div[id="react-select-2-option-8"]').click();
    cy.get("#smsAmount").type("-10000");
    cy.get("#topUpAmount").type("10");
    cy.get('div[class*="-placeholder"] > div:contains("Bank Name")').click();
    cy.get('div[id="react-select-3-option-0"]').click();
    cy.get("#accNum").type("123456");
    cy.get("#rechargeDate").type("2024-09-01");
    cy.get('input[type="file"]').as("fileInput");
    cy.fixture("images.jpg").then((fileContent) => {
      cy.get("@fileInput").attachFile({
        fileContent: fileContent.toString(),
        fileName: "images.jpg",
        mimeType: "image/jpg",
      });
    });
    cy.get("#remarks").type("Deposit");
    cy.contains("Submit").click();
    // cy.contains('Cancel').click()
  });

  it("Verify when Topup Amount is Negative", () => {
    Log();

    cy.get(`a[href ="/wallet-request"]`).click();
    cy.wait(2);
    cy.contains(`Request Deposit`).click();
    // cy.get('div > div[class*="-placeholder"] > div:contains("Client Name")').click().type('SNT0002')
    cy.get('div[class*="-placeholder"] > div:contains("Client Name")').click();
    // cy.get('div[class*="-option"]:contains("SNT0002")').click()
    cy.get('div[id="react-select-2-option-8"]').click();
    cy.get("#smsAmount").type("-10000");
    cy.get("#topUpAmount").type("10");
    cy.get('div[class*="-placeholder"] > div:contains("Bank Name")').click();
    cy.get('div[id="react-select-3-option-0"]').click();
    cy.get("#accNum").type("123456");
    cy.get("#rechargeDate").type("2024-09-01");
    cy.get('input[type="file"]').as("fileInput");
    cy.fixture("images.jpg").then((fileContent) => {
      cy.get("@fileInput").attachFile({
        fileContent: fileContent.toString(),
        fileName: "images.jpg",
        mimeType: "image/jpg",
      });
    });
    cy.get("#remarks").type("Deposit");
    cy.contains("Submit").click();
    // cy.contains('Cancel').click()
  });
});
