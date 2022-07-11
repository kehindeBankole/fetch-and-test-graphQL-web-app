///<reference types="cypress" />
import jobResponse from "../fixtures/jobSuccessResponse.json";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept(
      { method: "POST", url: "https://api.graphql.jobs/" },
      JSON.stringify(jobResponse)
    ).as("jobList");
  });

  it("displays loader", () => {
    cy.get('[data-test-id="loader"]').should("be.visible");
  });

  it("displays error message if request fails", () => {
    cy.intercept(
      { method: "POST", url: "https://api.graphql.jobs/" },
      { statusCode: 500 }
    ).as("serverError");
    cy.wait("@serverError");
    cy.get('[data-test-id="error"]').should("be.visible");
  });

  it("displays jobs on successfull request", () => {
    cy.wait("@jobList");
    cy.get('[data-test-id="date"]').should("be.visible");
    cy.contains("Senior Fullstack Engineer - Platform");
  });

  it("displays search bar ", () => {
    cy.wait("@jobList");
    cy.get('[data-test-id="input-box"]').should("be.visible");
    cy.get('[data-test-id="input-box"]').should("not.be.disabled");
  });

  it("displays tag buttons", () => {
    cy.wait("@jobList");
    cy.get('[data-test-id="tag-box"]').should("have.length.greaterThan", 1);
    cy.get('[data-test-id="tag-box"]').should("not.be.disabled");
    cy.get('[data-test-id="tag-box"]').should("not.be.disabled");
  });

  it("tests that search bar works", () => {
    cy.wait("@jobList");
    cy.get('[data-test-id="input-box"]').type("senior");
    cy.contains("Senior Fullstack Engineer - Platform");
  });

  it("tests that tag button works", () => {
    cy.wait("@jobList");
    cy.contains("button", "Senior").click();
    cy.contains("Senior Fullstack Engineer - Platform");
  });
});
