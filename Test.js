<html>
<head>
<title>T E S T</title>
<script>
function resultado() {
var p1, p2, p3, p4, nota;

<!-- 1ª pregunta -->
if (document.getElementById('p11').checked==true) {p1=1}
else {p1=0}
<!-- 2ª pregunta -->
if (document.getElementById('p22').checked==true) {p2=1}
else {p2=0}
<!-- 3ª pregunta -->
if (document.getElementById('p33').checked==true) {p3=1}
else {p3=0}
<!-- 4ª pregunta -->
if (document.getElementById('p44').checked==true) {p4=1}
else {p4=0}

nota=p1+p2+p3+p4;
alert(" Aciertos: " + nota);
location.reload();
}
</script>
</head>
<body>
<h2>T E S T</h2>
<hr>
<form style="font:normal 16px sans-serif">
<p>Primera pregunta del test... La respuesta es A.</p>
<p onclick="this.style.color='#00FF00'"><input type="radio" name="pregunta1" id="p11"> Texto de la respuesta A.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta1" id="p12"> Texto de la respuesta B.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta1" id="p13"> Texto de la respuesta C.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta1" id="p14"> Texto de la respuesta D.</p>

<p>Segunda pregunta del test... La respuesta es B.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta2" id="p21"> Texto de la respuesta A.</p>
<p onclick="this.style.color='#00FF00'"><input type="radio" name="pregunta2" id="p22"> Texto de la respuesta B.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta2" id="p23"> Texto de la respuesta C.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta2" id="p24"> Texto de la respuesta D.</p>

<p>tercera pregunta del test... La respuesta es C.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta3" id="p31"> Texto de la respuesta A.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta3" id="p32"> Texto de la respuesta B.</p>
<p onclick="this.style.color='#00FF00'"><input type="radio" name="pregunta3" id="p33"> Texto de la respuesta C.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta3" id="p34"> Texto de la respuesta D.</p>

<p>Cuarta pregunta del test... La respuesta es D.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta4" id="p41"> Texto de la respuesta A.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta4" id="p42"> Texto de la respuesta B.</p>
<p onclick="this.style.color='#FF0000'"><input type="radio" name="pregunta4" id="p43"> Texto de la respuesta C.</p>
<p onclick="this.style.color='#00FF00'"><input type="radio" name="pregunta4" id="p44"> Texto de la respuesta D.</p>
<hr>
<p><input type="button" value=" R E S U L T A D O " onclick="resultado()"/></p>
</form>
</body>
</html>
