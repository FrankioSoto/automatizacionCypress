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

  it("Punteo detalle manifiesto a entrega", () => {
    cy.fixture("punteoDetalleManifiestoEntregaOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get("#submenu4").contains("Manifiestos").click();
      cy.get(".sorting_1").contains(data.manifiesto).click();
      cy.get("#tipo_servicio").select(data.tipoServicio, { force: true });
      cy.get("#estado_paqueteo").select(data.estadoPaqueteo, { force: true });
      cy.get("#idenvio").type(data.guia).type("{enter}");

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
