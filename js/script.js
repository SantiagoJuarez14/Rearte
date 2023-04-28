document.querySelector(".burger").addEventListener("click", animateBars);

let burger1 = document.querySelector(".spanburger1");
let burger2 = document.querySelector(".spanburger2");
let burger3 = document.querySelector(".spanburger3");
let navmobile = document.querySelector(".navbar");  
let background = document.querySelector(".backmenu");

function animateBars(){
    burger1.classList.toggle("activespanburger1");
    burger2.classList.toggle("activespanburger2");
    burger3.classList.toggle("activespanburger3");

    navmobile.classList.toggle("navbaractive");
    background.classList.toggle("backmenuactive");
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