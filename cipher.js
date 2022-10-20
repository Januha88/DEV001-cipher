const cipher = {
  encode: function (espacios, mensaje){
      // let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     const alfabeto = Array.from(mensaje.toUpperCase())
     let mensajeCodificado = "";
      for ( let i = 0; i < alfabeto.length; i++) {
          let letra = alfabeto[i]
          let codigo = letra.charCodeAt(0);
          let nextCode = this.asciiEncode(codigo, Number (espacios));
          let nextLetra = String.fromCharCode(nextCode);
    
          mensajeCodificado = mensajeCodificado + nextLetra;
      }
      return mensajeCodificado;
  },

  decode: function (espacios, mensaje){
    const alfabeto = Array.from(mensaje.toUpperCase())
       let mensajeCodificado = "";
        for ( let i = 0; i < alfabeto.length; i++) {
            let letra = alfabeto[i]
            let codigo = letra.charCodeAt(0);
            let nextCode = this.asciiDecode(codigo, Number (espacios));
            let nextLetra = String.fromCharCode(nextCode);
            mensajeCodificado = mensajeCodificado + nextLetra;
        }
        return mensajeCodificado;
    
        },
        asciiEncode: function (asciiAlfabeto, espacios) {
            const min = 64;
            const max = 90;
            let sumaEspacioAscii = asciiAlfabeto + espacios;
            if( sumaEspacioAscii > max){
                const resultadoValorExcedente = sumaEspacioAscii - max;
                sumaEspacioAscii = this.asciiEncode(min, resultadoValorExcedente); 
            }
            return  sumaEspacioAscii;
        },

        asciiDecode: function (asciiAlfabeto, espacios) {
            const min = 65;
            const max = 91;
            let sumaEspacioAscii = asciiAlfabeto - espacios;
            if( sumaEspacioAscii < min){
                const resultadoValorExcedente = min - sumaEspacioAscii;
                sumaEspacioAscii = this.asciiDecode(max, resultadoValorExcedente); 
            }
            return  sumaEspacioAscii;
        }
}   
    
export default cipher;
   

