describe("Flujo para Asignación de guía a Manifiestos y cambio de estado a entrega", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Manifiesto asignación a zona punteo interno entrega", () => {
    cy.fixture("asignacionManifiestoOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get("#submenu4").contains("Manifiestos").click();
      cy.get("#" + data.manifiesto)
        .contains("Asignar envios")
        .click();
      cy.get("#idenvio").type(data.guia).type("{enter}");
      cy.get(".alert-success").should(
        "contain",
        "Envío " + data.guia + " actualizado"
      );
      cy.wait(3000);
      cy.get("#myModal").click({ force: true });
      cy.get(".sorting_1").contains(data.manifiesto).click();
      cy.get("#tabla_envios").should("contain", data.guia);
      cy.get("#result").should(
        "contain",
        "Envío " + data.guia + " Actualizado"
      );

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
