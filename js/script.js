const formulario1 = document.getElementById('formulario1');
const input1 = document.querySelectorAll('#formulario1 input');
var resultado = document.querySelector('#resultado');

function validar1(){
    if(document.getElementById('1-c').checked == true && document.getElementById('2-d').checked == true){
        alert("Has acertado");

        resultado.innerHTML = `<p class="mensaje-correcto">Has acertado</p>
        <p>2/2</p>`;
    }
    else if(document.getElementById('1-c').checked == false && document.getElementById('2-d').checked == true){
        alert("Has fallado");

        resultado.innerHTML = `<p class="mensaje-fallo">Has fallado, una de las respuestas es incorrecta</p>
        <p>1/2</p>`;
    }
    else if(document.getElementById('1-c').checked == true && document.getElementById('2-d').checked == false){
        alert("Has fallado");

        resultado.innerHTML = `<p class="mensaje-fallo">Has fallado, una de las respuestas es incorrecta</p>
        <p>1/2</p>`;
    }
    else{
        resultado.innerHTML = `<p class="mensaje-fallo">Has fallado, una de las respuestas es incorrecta</p>
        <p>0/2</p>`;

        alert("Has fallado");
    }
}

