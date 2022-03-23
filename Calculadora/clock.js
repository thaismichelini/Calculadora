//Mostrar hora na barra superior
var dateAndTime = document.getElementById('dateAndTime');
var currentTime = new Date();
dateAndTime.innerHTML = currentTime.toLocaleTimeString();