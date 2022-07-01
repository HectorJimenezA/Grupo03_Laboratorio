// JavaScript Document
var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };
        xmlhttp.open("GET", "xml/ventas.xml", false);
        xmlhttp.send();

        function myFunction(xml) {
            var xmlDoc = xml.responseXML;
            var x = xmlDoc.getElementsByTagName('TITLE')[2];
            var y = x.childNodes[0];
            document.getElementById("archivoEjemplo").innerHTML =
                y.nodeValue;
        }