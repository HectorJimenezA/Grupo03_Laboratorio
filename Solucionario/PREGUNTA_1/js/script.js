// JavaScript Document
var parser, xmlDoc;
var text = "<Quito><LugaresTuristicos>" +
"<title>Lugares Turisticos de Quito</title>" +
"<lugar>Mitad del Mundo</lugar>" +
"<direccion>La Ciudad Mitad del Mundo es un terreno propiedad de la prefectura de la provincia de Pichincha. Esta situado en la parroquia de San Antonio del Distrito Metropolitano de Quito, al norte de la ciudad de Quito.</direccion>" +
"</Quito></LugaresTuristicos>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("cadena1").innerHTML =
xmlDoc.getElementsByTagName("lugar")[0].childNodes[0].nodeValue;

document.getElementById("cadena2").innerHTML =
xmlDoc.getElementsByTagName("direccion")[0].childNodes[0].nodeValue;