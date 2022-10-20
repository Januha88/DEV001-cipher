import cipher from "./cipher.js";

const btnEncode = document.getElementById('encode');


btnEncode.addEventListener('click', ()=>{
    const textarea = document.getElementById('message');
    const message = textarea.value;
    const offset = document.getElementById('offset').value;
   const valorCodificado =  cipher.encode(offset, message);
   textarea.value = valorCodificado; 
})

const btnDecode = document.getElementById('decode');

btnDecode.addEventListener('click', ()=>{
    const textarea = document.getElementById('message');
    const message = textarea.value;
    const offset = document.getElementById('offset').value;
    const valorDecodificado = cipher.decode(offset, message); 
    textarea.value = valorDecodificado;
})



















