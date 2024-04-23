function updateDynamicText() {

    var testi_dinamici = [
        "Informatico",
        "Grafico", 
        "Developer", 
        "Pythonista",
    ];
    
    var indice_random = Math.floor(Math.random() * testi_dinamici.length);
    var testo_dinamico = testi_dinamici[indice_random];

    
    var element = document.getElementById("dynamic-text");
    element.textContent = testo_dinamico; 
}

setInterval(updateDynamicText, 1000); // Aggiorna la scritta ogni secondo
