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