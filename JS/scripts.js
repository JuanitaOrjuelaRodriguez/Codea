

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
//6 Pregunta
if (document.getElementById('p62').checked==true) {p6=1}
else {p6=0}

//Resultado
    nota=p1+p2+p3+p4+p5+p6;
    function resultado (){
        window.alert(" Aciertos: " + nota);
    }
    
    
