/* Debug des données */
console.table(data);

// Initialisation de la carte avec vue centrée sur La Rochelle
let map = L.map('map').setView([46.1635705075646, -1.1268395422898], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Parcourir les données pour chaque station
data.forEach(currentItem => {
    // Affichage de la station et de l'adresse 
    console.log("Station :");
    console.info(currentItem.fields.station_nom + " " + currentItem.fields.station_adresse);

    // Affichage des coordonnées de la station 
    console.log("Coordonnées :");
    console.log("Latitude : " + currentItem.fields.station_latitude);
    console.log("Longitude : " + currentItem.fields.station_longitude);

    // Création d'un marqueur sur la carte avec les coordonnées latitude/longitude
    let marker = L.marker([
        parseFloat(currentItem.fields.station_latitude.replace(',', '.')),  // Latitude
        parseFloat(currentItem.fields.station_longitude.replace(',', '.'))  // Longitude
    ]).addTo(map);

    // Ajout d'une popup pour chaque marqueur avec les informations de la station
    marker.bindPopup(
        `<b>${currentItem.fields.station_nom}</b><br>${currentItem.fields.station_adresse}<br>
        <b>Latitude :</b> ${currentItem.fields.station_latitude}<br>
        <b>Longitude :</b> ${currentItem.fields.station_longitude}<br>
        <b>Vélos disponibles :</b> ${currentItem.fields.velos_disponibles}`
    );
});

