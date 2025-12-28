const apiKey = "7abda8960b53b72a2972bca0a369c0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector("#etatInput");
const searchBtn = document.querySelector("#etatBtn");
const meteoIcon = document.querySelector("#imageMeteo");


async function checkWeather(ville) {
    const reponse = await fetch(apiUrl + ville + `&appid=${apiKey}`);
    var  data = await reponse.json();

    //Verification du type de reponse retourner par L'api
    if( reponse.status == 404) {
        document.querySelector("#error").className ="block";
        document.querySelector('#infoMeteo').className = "hidden";
    } else if (reponse.status == 200 ){

         //Mise a jour des variable dans le rendu HTML
    document.querySelector("#nomVille").innerHTML = data.name;
    document.querySelector("#valeurTemp").innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector("#humidityValeur").innerHTML = data.main.humidity +" %";
    document.querySelector("#vitesseVentValeur").innerHTML = data.wind.speed +" Km/h";


    //changement de l'icone en fonction des donnees retourner par l'API
    if(data.weather[0].main == "Clouds" ) {
        meteoIcon.src = "/1_MeteoApp/images/clouds.png" ;
    } else if(data.weather[0].main == "Clear" ) {
        meteoIcon.src = "/1_MeteoApp/images/clear.png"  ;
    } else if(data.weather[0].main == "Drizzle" ) {
        meteoIcon.src = "/1_MeteoApp/images/drizzle.png";  
    } else if(data.weather[0].main == "Mist" ) {
        meteoIcon.src = "/1_MeteoApp/images/mist.png" ; 
    } else if(data.weather[0].main == "mist" ) {
        meteoIcon.src = "/1_MeteoApp/images/mist.png" ; 
    } else if(data.weather[0].main == "Snow" ) {
        meteoIcon.src = "/1_MeteoApp//images/snow.png" ; 
    }
    else if(data.weather[0].main == "Rain" ) {
        meteoIcon.src = "/images/rain.png" ; 
    }
    document.querySelector('#infoMeteo').className = "block";
    document.querySelector("#error").className ="hidden";
}

    }

   

searchBtn.addEventListener("click", () => {
    // On récupère la valeur actuelle écrite dans le champ au moment du clic
    const ville = searchInput.value; 

    if (ville !== "") {
        checkWeather(ville);
    } else {
        alert("Veuillez entrer le nom d'une ville");
    }
});

