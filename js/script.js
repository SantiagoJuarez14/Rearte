/* let url = "https://cors-anywhere.herokuapp.com/www.mapapropapp.com/api/action/portal-v2/properties";

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error)); */

/*   POST /api/action/oauth2-v1/authorize HTTP/1.1
  Host: www.mapapropapp.com
  Content-Type: application/x-www-form-urlencoded
  Content-Length: 0
   
  client_id=jfioejweu8wu9fjsHUGldfja9ofwjf&client_secret=UHY&T&FOIHuihd8w2hg3kh8Y&grant_type=client_credentials

 */






//////////////////////////////////
document.querySelector(".burger").addEventListener("click", animateBars);

let burger1 = document.querySelector(".spanburger1");
let burger2 = document.querySelector(".spanburger2");
let burger3 = document.querySelector(".spanburger3");
let navmobile = document.querySelector(".navbar");  
let background = document.querySelector(".backmenu");
let whatsapp = document.querySelector(".whatsapp");

function animateBars(){
    burger1.classList.toggle("activespanburger1");
    burger2.classList.toggle("activespanburger2");
    burger3.classList.toggle("activespanburger3");

    navmobile.classList.toggle("navbaractive");
    background.classList.toggle("backmenuactive");
    whatsapp.classList.toggle("whatsappactive");
}

const form = document.querySelector('form');
const precio = document.querySelector('#precio');
let popup = document.querySelector(".popup");
form.addEventListener('submit', calcularPrecio);

function calcularPrecio(e) {
  e.preventDefault();

  const construidos = Number(document.querySelector('#construidos').value);
  const sinconstruir = Number(document.querySelector('#sinconstruir').value);
  const ubicacion = document.querySelector('#ubicacion').value;
  const habitaciones = Number(document.querySelector('#habitaciones').value);
  const baños = Number(document.querySelector('#baños').value);
  

  popup.style.display = "flex";

  let precioPorMetroCuadrado;

  switch (ubicacion) {
    case 'escobar':
      precioPorMetroCuadrado = 1500;
      break;
    case 'bellavista':
      precioPorMetroCuadrado = 1200;
      break;
    case 'grandbourg':
      precioPorMetroCuadrado = 1000;
      break;
    case 'pablonogues':
      precioPorMetroCuadrado = 1100;
      break;
    case 'josecpaz':
      precioPorMetroCuadrado = 1100;
      break;
    case 'polvorines':
      precioPorMetroCuadrado = 1100;
      break;
    case 'malvinas':
      precioPorMetroCuadrado = 1100;
      break;
    case 'muñiz':
      precioPorMetroCuadrado = 1100;
      break;
    case 'pilar':
      precioPorMetroCuadrado = 1100;
      break;
    case 'sanmiguel':
      precioPorMetroCuadrado = 1100;
      break;
    default:
      precioPorMetroCuadrado = 0;
      break;
  }
  const pileta = document.querySelector('#pileta');
  const terraza = document.querySelector('#terraza');

  let precioPorPileta;
  let precioPorTerraza;

  if (pileta.checked) {
    precioPorPileta = 4000;
  } else {
    precioPorPileta = 0;
  }
  if (terraza.checked) {
    precioPorTerraza = 7000;
  } else {
    precioPorTerraza = 0;
  }
  const precioPorHabitacion = 5000;
  const precioPorBaño = 3000;
  

  let precioArea = construidos * precioPorMetroCuadrado;
  let precioAreaSinConstruir = sinconstruir * precioPorMetroCuadrado;
  let precioHabitaciones = habitaciones * precioPorHabitacion;
  let precioBaños = baños * precioPorBaño;

  let formatter = new Intl.NumberFormat('es-ES', {
    style: 'decimal',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  
  let precioTotal = precioArea + precioAreaSinConstruir + precioHabitaciones +
    precioBaños + precioPorPileta + precioPorTerraza;
  
  let precioFormateado = formatter.format(precioTotal);
  
  precio.innerHTML = `U$S ${precioFormateado}`;
}

let boton_descargar_cotizacion = document.querySelector("#button_descargar");
let cotizacion = document.querySelector(".popup_border");

boton_descargar_cotizacion.addEventListener('click', function() {
  
  html2canvas(cotizacion).then(function(canvas) {
    
    let imagen = canvas.toDataURL();

    const link = document.createElement('a');
    link.download = 'Cotización_Propiedad.jpeg';
    link.href = imagen;
    link.click();
  });
});

document.querySelector(".cerrar_cotizacion").addEventListener('click', cerrarCotizacion);

function cerrarCotizacion(){
  popup.style.display = "none";
}

var zonas=[];
var zonas = [{"desc":"Buenos Aires","id":2,"childs":[{"desc":"Escobar","id":172,"zones":[{"desc":"Barrio Privado Los Tacos","id":5610,"zones":[]}]},{"desc":"Jos\u00e9 C. Paz","id":198,"zones":[{"desc":"Jos\u00e9 C. Paz","id":1068,"zones":[]}]},{"desc":"Malvinas Argentinas","id":214,"zones":[{"desc":"Grand Bourg","id":82,"zones":[]},{"desc":"Ingeniero Pablo Nogu\u00e9s","id":85,"zones":[]},{"desc":"Los Polvorines","id":86,"zones":[]},{"desc":"Malvinas Argentinas","id":87,"zones":[]}]},{"desc":"Pilar","id":232,"zones":[{"desc":"Pilar","id":104,"zones":[]}]},{"desc":"San Miguel","id":252,"zones":[{"desc":"Bella Vista","id":12,"zones":[]},{"desc":"Mu\u00f1iz","id":13,"zones":[]},{"desc":"San Miguel","id":15,"zones":[]},{"desc":"Barrio Privado Pato Verde","id":5756,"zones":[]}]}]}];
  var zone1 = $("#zone1");
  $.each(zonas, function() {
    var option = $("<option value='"+this.id+"'>"+this.desc+"</option>");
    option.data("zone", this);
    zone1.append(option);
  });
  $("#zone1").change(showZone2);
  $("#zone2").change(showZone3);

function showZone2() {
  $("#zone3").html("");
  $("#zone2").html("");
  var zone = $("#zone1").val();
  if (zone != "") {
    var any = $("<option value=''>Indistinto</option>");
    $("#zone2").append(any);
    var zone2;
    $.each(zonas, function() {
      if (this.id == zone) {
        zone2 = this;
        return false;
      }
    });
    if (zone2.childs) {
      $.each(zone2.childs, function() {
        var option = $("<option value='"+this.id+"'>"+this.desc+"</option>");
        option.data("zone", this);
        $("#zone2").append(option);
      });
    }
  }
}


function showZone3() {
  $("#zone3").html("");
  var zone = $("#zone2").val();
  if (zone != "") {
    var any = $("<option value=''>Indistinto</option>");
    $("#zone3").append(any);
    var zone3;
    $.each(zonas, function() {
      $.each(this.childs, function() {
        if (this.id == zone) {
          zone3 = this;
          return false;
        }
      });
      if (zone3) {
        return false;
      }
    });
    if (zone3.zones) {
      $.each(zone3.zones, function() {
        var option = $("<option value='"+this.id+"'>"+this.desc+"</option>");
        option.data("zone", this);
        $("#zone3").append(option);
      });
    }
  }

}