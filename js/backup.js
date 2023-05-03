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
let zona1 = $("#zona1");
$.each(zonas, function() {
  let option = $("<option value='"+this.id+"'>"+this.desc+"</option>");
  option.data("zone", this);
  zona1.append(option);
});
$("#zona1").change(showciudad);
$("#ciudad").change(showbarrio);

function showciudad() {
$("#barrio").html("");
$("#ciudad").html("");let zone = $("#zona1").val();
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