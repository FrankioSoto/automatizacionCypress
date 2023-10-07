describe("Facturación liquidar ordenes", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Facturación liquidación ordenes", () => {
    cy.fixture("facturacionLiquidarOrdenesOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get("#submenu4").contains("Facturación").click({ force: true });
      cy.get(".btn-primary")
        .contains("Liquidar Ordenes")
        .click({ force: true });
      cy.get("#fechaDesde").type(data.fechaDesde);
      cy.get("#fechaHasta").type(data.fechaHasta);
      cy.get("#cliente").select(data.cliente, { force: true });
      cy.get("#tipo_servicio").select(data.tipoServicio, {
        force: true,
      });
      cy.get("#sucursal").select(data.sucursal, {
        force: true,
      });
      cy.get("#btnConsultar").click();
      cy.get(".font-12").contains("Detalle").click();
      cy.wait(1000);
      cy.get("thead > :nth-child(1) > :nth-child(1) > input").uncheck(); //con cypress abierto busco el botón y me dice el selecctor
      cy.get("#checkbox-0").check(); //Seleccionar el primero de la tabla, ¿Cómo seleccionar con respecto a la coincidencia?
      cy.get(".font-12").contains("Resumen").click();
      cy.get("#btnLiquidar").click();

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
