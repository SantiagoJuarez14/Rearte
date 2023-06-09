document.querySelector(".burger").addEventListener("click", animateBars);

let burger1 = document.querySelector(".spanburger1");
let burger2 = document.querySelector(".spanburger2");
let burger3 = document.querySelector(".spanburger3");
let navmobile = document.querySelector(".navbar");  
let background = document.querySelector(".backmenu");
let whatsapp = document.querySelector(".whatsapp");
let burger = document.querySelector(".burger")

function animateBars(){
    burger1.classList.toggle("activespanburger1");
    burger2.classList.toggle("activespanburger2");
    burger3.classList.toggle("activespanburger3");

    navmobile.classList.toggle("navbaractive");
    background.classList.toggle("backmenuactive");
    whatsapp.classList.toggle("whatsappactive");
    burger.classList.toggle("burgeractive");

}
const nav = document.querySelector('.navbaractive');

let zonas = [
  {
    desc: "Buenos Aires",
    id: 2,
    childs: [
      {
        desc: "Escobar",
        id: 172,
        zones: [
          {
            desc: "Barrio Privado Los Tacos",
            id: 5610,
            zones: [],
          },
        ],
      },
      {
        desc: "José C. Paz",
        id: 198,
        zones: [
          {
            desc: "José C. Paz",
            id: 1068,
            zones: [],
          },
        ],
      },
      {
        desc: "Malvinas Argentinas",
        id: 214,
        zones: [
          {
            desc: "Grand Bourg",
            id: 82,
            zones: [],
          },
          {
            desc: "Ingeniero Pablo Nogués",
            id: 85,
            zones: [],
          },
          {
            desc: "Los Polvorines",
            id: 86,
            zones: [],
          },
          {
            desc: "Malvinas Argentinas",
            id: 87,
            zones: [],
          },
        ],
      },
      {
        desc: "Pilar",
        id: 232,
        zones: [
          {
            desc: "Pilar",
            id: 104,
            zones: [],
          },
        ],
      },
      {
        desc: "San Miguel",
        id: 252,
        zones: [
          {
            desc: "Bella Vista",
            id: 12,
            zones: [],
          },
          {
            desc: "Muñiz",
            id: 13,
            zones: [],
          },
          {
            desc: "San Miguel",
            id: 15,
            zones: [],
          },
          {
            desc: "Barrio Privado Pato Verde",
            id: 5756,
            zones: [],
          },
        ],
      },
    ],
  },
];

function createOption(value, text) {
  let option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

function populateSelect(selectElement, options) {
  options.forEach(function (option) {
    selectElement.appendChild(createOption(option.id, option.desc));
  });
}

function showciudad() {
  let barrioSelect = document.getElementById("barrio");
  let ciudadSelect = document.getElementById("ciudad");
  barrioSelect.innerHTML = "";
  ciudadSelect.innerHTML = "";
  let zone = parseInt(this.value);

  if (!isNaN(zone)) {
    ciudadSelect.appendChild(createOption("", "Indistinto"));

    let ciudad;
    for (let i = 0; i < zonas.length; i++) {
      if (zonas[i].id === zone) {
        ciudad = zonas[i];
        break;
      }
    }

    if (ciudad && ciudad.childs) {
      populateSelect(ciudadSelect, ciudad.childs);
    }
  }
}

function showbarrio() {
  let barrioSelect = document.getElementById("barrio");
  barrioSelect.innerHTML = "";
  let zone = parseInt(document.getElementById("ciudad").value);

  if (!isNaN(zone)) {
    barrioSelect.appendChild(createOption("", "Indistinto"));

    let barrio;
    for (let i = 0; i < zonas.length; i++) {
      for (let j = 0; j < zonas[i].childs.length; j++) {
        if (zonas[i].childs[j].id === zone) {
          barrio = zonas[i].childs[j];
          break;
        }
      }
      if (barrio) {
        break;
      }
    }

    if (barrio && barrio.zones) {
      populateSelect(barrioSelect, barrio.zones);
    }
  }
}

// Popula el select de zonas
let zonaSelect = document.getElementById("zona");
populateSelect(zonaSelect, zonas);

// Agrega los eventos de cambio a los selects
zonaSelect.addEventListener("change", showciudad);
document.getElementById("ciudad").addEventListener("change", showbarrio);
