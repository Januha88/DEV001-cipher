import cipher from "./cipher.js";

const btnEncode = document.getElementById('encode');


btnEncode.addEventListener('click', ()=>{
    const textarea = document.getElementById('message');
    const message = textarea.value;
    const offset = document.getElementById('offset').value;
   const valorCodificado =  cipher.encode(offset, message);
   console.log(valorCodificado);
   textarea.value = valorCodificado; 
})

const btnDecode = document.getElementById('decode');

btnDecode.addEventListener('click', ()=>{
    const textarea = document.getElementById('message');
    const message = textarea.value;
    const offset = document.getElementById('offset').value;
    const valorDecodificado = cipher.decode(offset, message); 
    console.log(valorDecodificado);
    textarea.value = valorDecodificado;
})





