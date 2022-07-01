// JavaScript Document
function leerDocumento() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "xml/ventas.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>N</th><th>PRODUCTO</th><th>DESCRIPCION</th><th>PRECIO UNITARIO</th><th>CANTIDAD</th><th>PRECIO TOTAL</th></tr>";
  var x = xmlDoc.getElementsByTagName("PRODUCTO");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("NUMERO")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
		x[i].getElementsByTagName("DESCRIPCION")[0].childNodes[0].nodeValue +
    "</td><td>"+
		x[i].getElementsByTagName("PRECIOU")[0].childNodes[0].nodeValue +
    "</td><td>"+
		x[i].getElementsByTagName("CANTIDAD")[0].childNodes[0].nodeValue +
    "</td><td>"+
		x[i].getElementsByTagName("PRECIOT")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}