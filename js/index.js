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
const nav = document.querySelector('.navbar');

nav.addEventListener('click', (e) => {
  if (e.target.matches('.menu')) {
    e.preventDefault();
    animateBars();
    window.location.href = e.target.href;
  }
});






let zonas = [{"desc":"Buenos Aires","id":2,"childs":
            [{"desc":"Escobar","id":172,"zones":
                [{"desc":"Barrio Privado Los Tacos","id":5610,"zones":[]}]},
            {"desc":"José C. Paz","id":198,"zones":
                [{"desc":"José C. Paz","id":1068,"zones":[]}]},
            {"desc":"Malvinas Argentinas","id":214,"zones":
                [{"desc":"Grand Bourg","id":82,"zones":[]},
                {"desc":"Ingeniero Pablo Nogués","id":85,"zones":[]},
                {"desc":"Los Polvorines","id":86,"zones":[]},
                {"desc":"Malvinas Argentinas","id":87,"zones":[]}]},
            {"desc":"Pilar","id":232,"zones":
                [{"desc":"Pilar","id":104,"zones":[]}]},
            {"desc":"San Miguel","id":252,"zones":[
                {"desc":"Bella Vista","id":12,"zones":[]},
                {"desc":"Muñiz","id":13,"zones":[]},
                {"desc":"San Miguel","id":15,"zones":[]},
                {"desc":"Barrio Privado Pato Verde","id":5756,"zones":[]}]}]}];
let zona = $("#zona");
$.each(zonas, function() {
  let option = $("<option value='"+this.id+"'>"+this.desc+"</option>");
  option.data("zone", this);
  zona.append(option);
});
$("#zona").change(showciudad);
$("#ciudad").change(showbarrio);

function showciudad() {
$("#barrio").html("");
$("#ciudad").html("");let zone = $("#zona").val();
if (zone != "") {
let any = $("<option value=''>Indistinto</option>");
  $("#ciudad").append(any);
let ciudad;
  $.each(zonas, function() {
    if (this.id == zone) {
      ciudad = this;
      return false;
    }
  });
  if (ciudad.childs) {
    $.each(ciudad.childs, function() {
    let option = $("<option value='"+this.id+"'>"+this.desc+"</option>");
      option.data("zone", this);
      $("#ciudad").append(option);
    });
  }
}
}


function showbarrio() {
$("#barrio").html("");let zone = $("#ciudad").val();
if (zone != "") {
let any = $("<option value=''>Indistinto</option>");
  $("#barrio").append(any);
let barrio;
  $.each(zonas, function() {
    $.each(this.childs, function() {
      if (this.id == zone) {
        barrio = this;
        return false;
      }
    });
    if (barrio) {
      return false;
    }
  });
  if (barrio.zones) {
    $.each(barrio.zones, function() {
    let option = $("<option value='"+this.id+"'>"+this.desc+"</option>");
      option.data("zone", this);
      $("#barrio").append(option);
    });
  }
}

}