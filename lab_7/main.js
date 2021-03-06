const mymap = L.map('mapid').setView([51.505,-0.09], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmRhdmlkIiwiYSI6ImNrOG5sOGZoMzByYTYzaG84cnB5cWI4aXYifQ.ylxpfLppqaMujEJ_-Vhcog'
}).addTo(mymap);

const hornmaker = L.marker([38.988970,-76.941480]).addTo(mymap);