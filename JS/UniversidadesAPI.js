


const botonDeBusqueda = document.getElementById('#busqueda');

function boton(){
    botonDeBusqueda;
    datosDeApi();
}

function datosDeApi (){
$.get("https://www.datos.gov.co/resource/iwb2-skc4.json", function(data){
    console.log(data);
});
}

