function muunnaLampotila() {
    let muunnettava = document.getElementById("lampotila").value;
    if (isNaN(muunnettava) || muunnettava == "" || muunnettava <= -273.15) {
        document.getElementById("virhe").innerHTML = "Virheellinen syöte"
        return
    } else {
        document.getElementById("virhe").innerHTML = ""
    }
    const muunnos = document.getElementById("yksikko").value;
    const valittuDesimaali = document.querySelector('input[name="desimaalit"]:checked').value;
    let celciusFahrenheit = (muunnettava) * 1.8 + 32
    let fahrenheitCelcius =  (muunnettava - 32) / 1.8

    if (muunnos == "c-to-f") {
        let pyoristetty = Math.round(celciusFahrenheit * 10) / 10
        const fixed = pyoristetty.toFixed(valittuDesimaali)
        document.getElementById("tulos-print").innerHTML = `${muunnettava} Celcius astetta on:`
        document.getElementById("palautus").innerHTML = `${fixed}°F`
    } 

    if (muunnos == "f-to-c") {
        let pyoristetty = Math.round(fahrenheitCelcius * 10) / 10
        const fixed = pyoristetty.toFixed(valittuDesimaali)
        document.getElementById("tulos-print").innerHTML = `${muunnettava} Fahrenheit astetta on:`
        document.getElementById("palautus").innerHTML = `${fixed}°C` 
    }
}