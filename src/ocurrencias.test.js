import contadorOcurrencias from "./contador";


describe("Contar ocurrencias", () => {
  
  it("deberia sumar dos numeros", () => {
    const contar = new contadorOcurrencias();
    expect(contar.ocurrencias("hola")).toEqual(2);
  });

  






});