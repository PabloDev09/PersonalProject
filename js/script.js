function validar1(){
    if(document.getElementById('1-c').checked == true && document.getElementById('2-d').checked == true){
        alert("Has acertado. :)\nPremio: Has ganado una invitación al cine, puedes elegir fecha, hora y película. Pd: Que no sea romántica jeje.");
    }
    else if(document.getElementById('1-c').checked == false && document.getElementById('2-d').checked == true){
        alert("Has fallado. :/\nAciertos: 1/2 ");
    }
    else if(document.getElementById('1-c').checked == true && document.getElementById('2-d').checked == false){
        alert("Has fallado. :/\nAciertos: 1/2 ");
    }
    else{
        alert("Has fallado. :(\nAciertos: 0/2 ");
    }
}

function validar2(){
    if(document.getElementById('3-a').checked == true){
        alert("Has acertado. :)\nPremio: Has ganado poder conmigo After, sientete orgullosa porque no tengo ganas :/");
    }
    else{
        alert("Has fallado. :(\nAciertos: 0/1 ");
    }
}


function validar3(){
    if(document.getElementById('4-b').checked == true){
        alert("Has acertado. :)\nReto: Me tienes que decir cuantas caritas hay en la página, algunas de ellas están ocultas.");
    }
    else{
        alert("Has fallado. :(\nAciertos: 0/1 ");
    }
}


function validar4(){
    if(document.getElementById('5-c').checked == true || document.getElementById('5-d').checked == true){
        alert("Has acertado. :)\nPd: No te pases con el reto pls.");
    }
    else{
        alert("Has fallado. :(\nAciertos: 0/1 ");
    }
}


function validar5(){
    if(document.getElementById('6-b').checked == true && document.getElementById('7-d').checked == true){
        alert("Has acertado. :)\nPista: Uno de los iconos que están presentes en todas las páginas te puede llevar a otra página, necesitas tocar ese icono para poder conseguir el megapremio.");
    }
    else if(document.getElementById('6-b').checked == false && document.getElementById('7-d').checked == true){
        alert("Has fallado. :/\nAciertos: 1/2 ");
    }
    else if(document.getElementById('6-b').checked == true && document.getElementById('7-d').checked == false){
        alert("Has fallado. :/\nAciertos: 1/2 ");
    }
    else{
        alert("Has fallado. :(\nAciertos: 0/2 ");
    }
}


