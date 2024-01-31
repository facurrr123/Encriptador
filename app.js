const padre = document.querySelector('div.resultado');

const eli1 = document.querySelector('img.muñeco');
const eli2 = document.querySelector('p.alerta');
const eli3 = document.querySelector('p.escritura');
const botonCopiar = document.createElement('button');
const textoResultado = document.createElement('p'); 

botonCopiar.textContent = 'Copiar';
textoResultado.classList.add('textResul'); 
botonCopiar.classList.add('botCopiar'); 

padre.addEventListener('click', function(){
    padre.replaceChild(textoResultado, eli1 );
    padre.removeChild(eli2);
    padre.replaceChild(botonCopiar, eli3);
    
})

const botonEncrip = document.getElementById('encriptar');
const botonDescrip = document.getElementById('desencriptar');
const textoAEncriptar = document.getElementById('texto');

function encriptador(texto){
    let array = [];
    let separador = texto.split('');
    for(let i = 0; i < separador.length; i++){
        if(separador[i] === 'a'){
            array.push('ai');
        }else if(separador[i] === 'e'){
            array.push('enter');
        }else if(separador[i] === 'i'){
            array.push('imes');
        }else if(separador[i] === 'o'){
            array.push('ober');
        }else if(separador[i] === 'u'){
            array.push('ufat');
        }else{
            array.push(separador[i])
        }
    }
    let textoEncriptado = array.join('');
    return textoEncriptado;
    }

    
function desencriptar(texto){
    let array = [];
    let separador = texto.split('');
    i = 0;
    while(i < separador.length){
        if (separador[i] === 'a' && separador[i+1] === 'i'){
            array.push('a');
            i+=2;
        }else if(separador [i] === 'e' && separador[i+1] === 'n' && separador[i+2] === 't' && separador[i+3] === 'e' && separador[i+4] === 'r'){
            array.push('e');
            i+=5;
        }else if(separador [i] === 'i' && separador[i+1] === 'm' && separador[i+2] === 'e' && separador[i+3] === 's'){
            array.push('i');
            i+=4;
        }else if(separador [i] === 'o' && separador[i+1] === 'b' && separador[i+2] === 'e' && separador[i+3] === 'r'){
            array.push('o');
            i+=4;
        }else if(separador [i] === 'u' && separador[i+1] === 'f' && separador[i+2] === 'a' && separador[i+3] === 't'){
            array.push('u');
            i+=4; 
        }else{
            array.push(separador[i]);
            i++;
        }
    }
    let textoEncriptado = array.join('');
    return textoEncriptado;
}

textoAEncriptar.addEventListener('keypress', function(){
    padre.replaceChild(textoResultado, eli1 );
    padre.removeChild(eli2);
    padre.replaceChild(botonCopiar, eli3)
})

botonEncrip.addEventListener('click', function(){
    textoResultado.textContent = encriptador(textoAEncriptar.value);
})

botonDescrip.addEventListener('click', function(){
    textoResultado.textContent = desencriptar(textoAEncriptar.value);  
})


async function read() {
	try {
    	let text = await navigator.clipboard.readText();
        console.log(`Resultado: ${text}`);
    } catch(error) {
    	console.log(`Ocurrió un error: ${error}`);
    }
}

botonCopiar.addEventListener("click", async event => {
    try {
      const text = await navigator.clipboard.writeText(textoResultado.textContent);
    } catch (error) {
      console.log(`Ocurrió un error: ${error}`);
    }
  });


  
  textoAEncriptar.addEventListener('paste', function(){
    padre.replaceChild(textoResultado, eli1 );
    padre.removeChild(eli2);
    padre.replaceChild(botonCopiar, eli3)
})       
 




  




