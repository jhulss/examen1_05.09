import contadorOcurrencias from "./contador";


describe("Contar ocurrencias", () => {
  
  it("deberia retornar la palabra ingresada", () => {
    const contar = new contadorOcurrencias();
    expect(contar.ocurrencias("hola")).toEqual("hola");
  });

  






});