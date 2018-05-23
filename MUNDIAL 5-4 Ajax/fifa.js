addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
    for(var f=1;f<=32;f++)
        {
            var ob=document.getElementById('enlace'+f);
            ob.addEventListener('click',presionarEnlace,false);
        }
}

function presionarEnlace(e)
{
    e.preventDefault();
    var url=e.target.getAttribute('href');
    cargarHoroscopo(url);
}

 var conexion1;
function cargarHoroscopo(url)
{
    conexion1=new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("GET", url, true);
    conexion1.send();
}

function procesarEventos()
{
    var comentarios=document.getElementById("comentarios");
    if(conexion1.readyState == 4)
        {
            comentarios.innerHTML= conexion1.responseText;
        }
    else
        {
            comentarios.innerHTML="Cargando";
        }
}