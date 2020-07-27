function resultado() {
    //var p1, p2, p3, p4, p5, p6, p7, nota;

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
    document.write('<h2>' + " Felicidades, completaste la prueba " + '</h2>')
    document.write('<h2 id="result">' + "Tu puntuación es " + nota + " de 7" +'</h2>');
    //window.alert(" Aciertos: " + nota)
   }

