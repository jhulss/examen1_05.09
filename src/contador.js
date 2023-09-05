class contadorOcurrencias {
   convertirMinuscula(palabra)
   {    
    let palabraMinuscula = palabra.toLowerCase(); 
       return palabraMinuscula;
   }


   verificarOcurrencias(palabra)
   {
    let palabra2 = this.convertirMinuscula(palabra);
    let dividirPalabra = palabra2.slice("/");
    let palabraFragmentada = [];
    for (let letra of dividirPalabra)
    {
        palabraFragmentada.push(letra);

    }
    return palabraFragmentada;
   }
}

export default contadorOcurrencias;