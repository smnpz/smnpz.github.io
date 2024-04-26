function updateDynamicText() {

    var testi_dinamici = [
        "Informatico",
        "Grafico", 
        "Developer", 
        "Pythonista",
        "Software Developer",
        "Web Developer",
        "Telegram Bot Developer"
    ];

    var testi_dinamici_en = [
        "Computer scientist",
        "Graphic", 
        "Developer", 
        "Pythonist",
        "Software Developer",
        "Web Developer",
        "Telegram Bot Developer"
    ];
    
    var indice_random = Math.floor(Math.random() * testi_dinamici.length);
    var testo_dinamico = testi_dinamici[indice_random];
    
    var element = document.getElementById("dynamic-text");
    element.textContent = testo_dinamico; 

    var testo_dinamico_en = testi_dinamici[indice_random];

    var element_en = document.getElementById("dynamic-text-en");
    element_en.textContent = testo_dinamico_en; 
}

function updateDynamicText_en() {

    var testi_dinamici_en = [
        "Computer scientist",
        "Graphic", 
        "Developer", 
        "Pythonist",
        "Software Developer",
        "Web Developer",
        "Telegram Bot Developer"
    ];
    
    var indice_random = Math.floor(Math.random() * testi_dinamici_en.length);

    var testo_dinamico_en = testi_dinamici_en[indice_random];

    var element_en = document.getElementById("dynamic-text-en");
    element_en.textContent = testo_dinamico_en; 
}

function cambiaTema(nomeTema) {
    if (nomeTema === 'tema-scuro') {
        document.getElementById('tema-css').href = 'style-dark.css';
    } else if (nomeTema === 'tema-chiaro') {
        document.getElementById('tema-css').href = 'style.css';
    }
}


setInterval(updateDynamicText, 1000); // Aggiorna la scritta ogni secondo
setInterval(updateDynamicText_en, 1000);
