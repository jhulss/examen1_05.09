import contadorOcurrencias from "./contador";


describe("Contar ocurrencias", () => {
  
  it("deberia retornar la palabra ingresada", () => {
    const contar = new contadorOcurrencias();
    expect(contar.verificarOcurrencias("hola")).toEqual("hola");
  });

   it("deberia retornar la palabra ya sea en formato TU, Tu, tU en minuscula", () => {
    const contar = new contadorOcurrencias();
    expect(contar.verificarOcurrencias("HOLA")).toEqual("hola");
  });

  


  






});