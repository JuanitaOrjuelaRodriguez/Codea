function resultado() {

//1 pregunta 
if (document.getElementById('p11').checked==true) {p1=1}
else {p1=0}
//2 pregunta
if (document.getElementById('p23').checked==true) {p2=1}
else {p2=0}
//3 pregunta
if (document.getElementById('p33').checked==true) {p3=1}
else {p3=0}
//4 pregunta
if (document.getElementById('p44').checked==true) {p4=1}
else {p4=0}
//5 pregunta
if (document.getElementById('p51').checked==true) {p5=1}
else {p5=0}
//6 pregunta
if (document.getElementById('p62').checked==true) {p6=1}
else {p6=0}
//7 pregunta
if (document.getElementById('p74').checked==true) {p7=1}
else {p7=0}

//Resultado
    nota=p1+p2+p3+p4+p5+p6+p7;

    var resultado_html = ""; 

//Clasificación resultado
const rate_calification = nota;
if (rate_calification > 0 && rate_calification <= 3){
    resultado_html += '<h2>' + " Prueba Finalizada " + '</h2>';
    resultado_html += "Sigue practicando tu inglés. Entonces puede que estés listo para prepararte a 'English A Course (Beginners)'.";
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 7" +'</h3>';
} else if (rate_calification > 3 && rate_calification <= 5) {
    resultado_html += '<h2>' + " Felicidades, completaste la prueba " + '</h2>';
    resultado_html += "Vale, tienes un buen nivel pero hay que trabjar un poco más en tu inglés. Entonces puede que estés listo para presentarte a 'English B Course (Intermediate)'";
    resultado_html += '<h2>' + " Felicidades, completaste la prueba " + '</h2>';
} else if (rate_calification > 5 && rate_calification <=7) {
    resultado_html += '<h2>' + " Felicidades, completaste la prueba " + '</h2>';
    resultado_html += "Enhorabuena, completaste el test sin fallas. Certifcate con nuestro curso 'Advanced English C (Advanced)'";
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 7" +'</h3>';
} else {
    resultado_html += "No respondiste nada.";
} 
$("#resultado").html(resultado_html);
return nota
}


