
const d = document,
    n = navigator;

export default function geolocation (div){
    const $div = d.getElementById(div);

    if("geolocation" in n){
        n.geolocation.getCurrentPosition(position => {
        let Coords = position.coords;

            $div.innerHTML = `<h4>Tu posición actual es:</h4>
               <li>Latidud:<b>${Coords.latitude}</b></li><br>
                <li>Longitud:<b>${Coords.longitude}</b></li><br>
                <li>Precisión:<b>${Coords.accuracy}</b> metros</li><br>
                <a href = "http://www.google.com/maps/@${Coords.latitude},${Coords.longitude},20z"
                target = "blank" rel = "noopener">Ver Mapa</a>`;
        })

    }
    else 
        alert("No se puede acceder a ubicación");
} 
