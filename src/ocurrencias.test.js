import contadorOcurrencias from "./contador";


describe("Contar ocurrencias", () => {
  
  it("deberia retornar la palabra ingresada", () => {
    const contar = new contadorOcurrencias();
    expect(contar.convertirMinuscula("hola")).toEqual("hola");
  });

   it("deberia retornar la palabra ya sea en formato TU, Tu, tU en minuscula", () => {
    const contar = new contadorOcurrencias();
    expect(contar.convertirMinuscula("HOLA")).toEqual("hola");
  });

   it("deberia retornar la palabra dividida", () => {
    const contar = new contadorOcurrencias();
    expect(contar.verificarOcurrencias("HOLA")).toEqual("h,o,l,a");
  });







  






});