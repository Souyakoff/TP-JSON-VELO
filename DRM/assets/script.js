/* Debug des données */
console.table(data);

let map = L.map('map').setView([46.156905294383, -1.15385009802005], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

data.forEach(currentItem => {
    console.log("DRM Localisation :");
    console.info(currentItem.fields.drm_localisation + ", Nombre de places : " + currentItem.fields.drm_nbre);
    console.log("Coordonnées :");
    console.log("Latitude : " + currentItem.fields.geo_point_2d[1]);
    console.log("Longitude : " + currentItem.fields.geo_point_2d[0]);

    let marker = L.marker([
        currentItem.fields.geo_point_2d[1],  // Latitude
        currentItem.fields.geo_point_2d[0]   // Longitude
    ]).addTo(map);

    marker.bindPopup(
        `<b>Localisation :</b> ${currentItem.fields.drm_localisation}<br>
        <b>Nombre de places :</b> ${currentItem.fields.drm_nbre}<br>
        <b>Latitude :</b> ${currentItem.fields.geo_point_2d[1]}<br>
        <b>Longitude :</b> ${currentItem.fields.geo_point_2d[0]}`
    );
});
