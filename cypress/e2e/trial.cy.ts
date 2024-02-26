describe("template spec", () => {
  it("passes", () => {
    expect(true).to.be.true;
  });
  it("fails", () => {
    cy.visit("https://about.deere.com")
    expect(true).to.be.false;
  });
});
