function resultado() {
    
if (document.getElementById('p11').checked==true) {
    p1=1
} else {
    p1=0
}
if (document.getElementById('p23').checked==true) {
    p2=1
} else {
    p2=0
} 
if (document.getElementById('p33').checked==true) {
    p3=1
} else {
    p3=0
} 
if (document.getElementById('p44').checked==true) {
    p4=1
} else {
    p4=0
}
if (document.getElementById('p51').checked==true) {
    p5=1
} else {
    p5=0
}
if (document.getElementById('p62').checked==true) {
    p6=1
} else {
    p6=0
}
if (document.getElementById('p74').checked==true) {
    p7=1
} else {
    p7=0
}

//Resultado
    nota=p1+p2+p3+p4+p5+p6;
    document.write('<h2>' + " Felicidades, completaste la prueba " + '</h2>');
    document.write('<h3 id="result">' + "Tu puntuación es " + nota + " de 6" +'</h3>');

//Clasificación resultado
const rate_calification = nota;
if (rate_calification <= 3){
    document.write("Sigue practicando. Puede que sea necesario comenzar desde el cruso de Fundamentos de desarrollo web (Principiante)'.");
} else if (rate_calification > 3 && rate_calification <= 5) {
    document.write("Vale, tienes un buen nivel pero hay que trabjar un poco más. Entonces puede que estés listo para presentarte al curso de 'Hola mundo! (Intermedio)'");
} else if (rate_calification > 5 && rate_calification <=6) {
    document.write("Enhorabuena, completaste el test sin fallas. Certifcate con nuestro curso 'JavaScript para la web (Avanzado)'");
}
   }


