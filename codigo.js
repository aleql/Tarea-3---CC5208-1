var svg 	= d3.select("body")
			.append("svg")
			.attr("width", 700)
			.attr("height", 700);


var data_media = [];
d3.csv("/dataset/IVE-SINAE-BASICA.csv", function(d) {
  return {
  	nombre : d.NOMBRE_ESTABLECIMIENTO,
  	area : d.AREA,
  	dependencia : d.DEPENDENCIA,
  	comuna : d.COMUNA,
  	total_matricula_2015 : parseInt(d.TOTAL_MATRICULA_2015),
  	porcentaje_vulnerabilidad : parseFloat(d.IVE_SINAE_2016),
  	porcentaje_alumnos_p1 : parseFloat((parseInt(d.PRIMERA_PRIORIDAD)/parseInt(d.TOTAL_MATRICULA_2015)).toFixed(3))
  };
}, function(data) {
  data_media = data;
});

setTimeout(function(){
console.log(data_media[0]);
},200);


