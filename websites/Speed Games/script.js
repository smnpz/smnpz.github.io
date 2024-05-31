function startGame(game) {
    switch(game) {
        case 1: 
            startGame_mouseClicker();
            break;
        case 2:
            startGame_reactionTime();
            break;
        case 3:
            startGame_aimTrainer();
            break;
        case 4:
            startGame_hanoiTower();
            break;
        case 5:
            startGame_wordMemory();
            break;
        case 6:
            startGame_numberMemory();
            break;
        case 7:
            startGame_guessTheFlag();
            break;
        case 8:
            startGame_mathSolver();
            break;
    }
}

function startGame_mouseClicker() {
    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-arrow-pointer fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Preparati a cliccare!</span></center>
                            <center><span id= "game-button"></span></center>
                        </div>`;

    let name = document.getElementById('game-name');
    let seconds = 3;

    let head = document.getElementById('game-head');

    const countdownInterval = setInterval(function() {
        seconds--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${seconds}</span>`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            head.innerHTML = `<i class="fa-solid fa-arrow-pointer fa-shake fa-8x main-icon"></i>`;
            name.innerHTML = `Hai cliccato <span class="yellow-text">0</span> volte!`;

            let sec_rimanenti = 10;
            let clickCount = 0;
            let info = document.getElementById('game-info');
            info.innerHTML = `Ti rimangono <span class="yellow-text">${sec_rimanenti}</span> secondi.`;

            // Funzione per contare i click
            function countClicks() {
                clickCount++;
                name.innerHTML = `Hai cliccato <span class="yellow-text">${clickCount}</span> volte!`;
            }

            // Aggiungi l'event listener per contare i click
            document.addEventListener('click', countClicks);

            const gameInterval = setInterval(function() {
                sec_rimanenti--;
                info.innerHTML = `Ti rimangono <span class="yellow-text">${sec_rimanenti}</span> secondi.`;

                if (sec_rimanenti <= 0) {
                    clearInterval(gameInterval);
                    document.removeEventListener('click', countClicks);
                    
                    let resultMessage;
                    if (clickCount <= 10) {
                        resultMessage = "Mi prendi in giro!? Riproviamoci...";
                    } else if (clickCount <= 50) {
                        resultMessage = "Mhh, puoi fare di meglio...";
                    } else if (clickCount <= 100) {
                        resultMessage = "Sei una scheggia dei click!";
                    } else {
                        resultMessage = "Sei il maestro dei click!";
                    }

                    info.innerHTML = resultMessage;

                    name.innerHTML = `Hai cliccato <span class="yellow-text">${clickCount}</span> volte.`;

                    head.innerHTML = `<i class="fa-solid fa-arrow-pointer fa-8x main-icon"></i>`;

                    let button = document.getElementById('game-button');
                    button.innerHTML = `<a href = "mouse-clicker.html"><button class = "btn main-button">Gioca di nuovo!</button></a>`;
                }
            }, 1000);
        }
    }, 1000);
}

function startGame_reactionTime() {
    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-eye fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Rimani concentrato!</span></center>
                            <center><span id= "game-button"></span></center>
                        </div>`;

    let name = document.getElementById('game-name');
    let seconds = 3;
    let head = document.getElementById('game-head');
    let color_section = document.getElementById('main-section');
    let info = document.getElementById('game-info');

    const countdownInterval = setInterval(async function() {
        seconds--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${seconds}</span>`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            color_section.style.backgroundColor = "#CE2636";
            head.innerHTML = `<i class="fa-solid fa-hourglass fa-8x main-icon"></i>`;
            name.innerHTML = `Aspetta il verde...`;
            
            setTimeout(function func() {
                color_section.style.backgroundColor = "#4BDB6A";
                name.innerHTML = `Clicca sullo schermo!`;
                head.innerHTML = `<i class="fa-solid fa-arrow-pointer fa-8x main-icon"></i>`;
                var inizio = new Date();

                section.onclick = function() {
                    var fine = new Date();
                    var time = fine.getTime() - inizio.getTime();

                    let colore = color_section.style.backgroundColor;
                    color_section.style.backgroundColor = "#2B87D1";
                    name.innerHTML = `Hai impiegato <span class = "yellow-text">${time}</span> millisecondi.`;
                    info.innerHTML = ""

                    head.innerHTML = `<center><span id="game-head"><i class="fa-solid fa-eye fa-8x main-icon"></i></span></center>`;

                    let button = document.getElementById('game-button');
                    button.innerHTML = `<a href = "reaction-time.html"><button class = "btn main-button">Gioca di nuovo!</button></a>`;

                    section.onclick = null;
                }
            }, (2500 + numero_casuale(0, 5000)));
        }
    }, 1000);
}

function startGame_aimTrainer() {
    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-bullseye fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Preparati a colpire i bersagli!</span></center>
                            <center><span id= "game-button"></span></center>
                            <span id= "game-icon"><i class="fa-solid fa-bullseye fa-4x"></i></span>
                        </div>`;
    
    let icona = document.getElementById('game-icon');

    section.style.position = "relative";
    icona.style.position = "absolute";

    var posizioneCasualeX = Math.floor(Math.random() * (section.offsetWidth - icona.offsetWidth));
    var posizioneCasualeY = Math.floor(Math.random() * (section.offsetHeight - icona.offsetHeight));
    
    icona.style.left = posizioneCasualeX + "px";
    icona.style.top = posizioneCasualeY + "px";

    icona.style.visibility = "hidden";
    let counter = 0;

    icona.onclick = function() {
        posizioneCasualeX = Math.floor(Math.random() * (section.offsetWidth - icona.offsetWidth));
        posizioneCasualeY = Math.floor(Math.random() * (section.offsetHeight - icona.offsetHeight));
        
        icona.style.left = posizioneCasualeX + "px";
        icona.style.top = posizioneCasualeY + "px";

        counter++;
    }

    let name = document.getElementById('game-name');
    let seconds = 3;

    let head = document.getElementById('game-head');

    const countdownInterval = setInterval(function() {
        seconds--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${seconds}</span>`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            head.innerHTML = `<i class="fa-solid fa-arrow-bullseye fa-8x main-icon" style = "visibility: hidden;"></i>`;
            name.innerHTML = `<span style = "visibility: hidden;">Il gioco inizia tra... <span class="yellow-text">3</span></span>`;

            icona.style.visibility = "visible";
            icona.style.color = "#FFD43B";

            let sec_rimanenti = 15;
            let clickCount = 0;
            
            let info = document.getElementById('game-info');
            info.innerHTML = `Ti rimangono <span class="yellow-text">${sec_rimanenti}</span> secondi.`;

            
            const gameInterval = setInterval(function() {
                sec_rimanenti--;
                info.innerHTML = `Ti rimangono <span class="yellow-text">${sec_rimanenti}</span> secondi.`;

                if (sec_rimanenti <= 0) {
                    clearInterval(gameInterval);
                    head.style.visibility = "visible";
                    name.style.visibility = "visible";
                    icona.style.display = "none";

                    let resultMessage;
                    if (counter <= 3) resultMessage = "Mi prendi in giro!? Riproviamoci...";
                    else if (counter <= 10) resultMessage = "Mhh, puoi fare di meglio...";
                    else if (counter <= 20) resultMessage = "Sei un tiratore scelto!";
                    else resultMessage = "Sei il maestro dei bersagli!";

                    head.innerHTML = `<i class="fa-solid fa-bullseye fa-8x main-icon"></i>`;
                    name.innerHTML = `Hai colpito <span class = "yellow-text">${counter}</span> bersagli!`;
                    info.innerHTML = resultMessage;

                    let button = document.getElementById('game-button');
                    button.innerHTML = `<a href = "aim-trainer.html"><button class = "btn main-button">Gioca di nuovo!</button></a>`;
                }
            }, 1000);
        }
    }, 1000);
}

var pole1 = [1,2,3,4];
var pole2 = [];
var pole3 = [];
var mano = 0;
var moves = 0;
var timerInterval;
var seconds = 0;
var minutes = 0;
var totDischi = pole1.length;

function startGame_hanoiTower() {

    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-gopuram fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Rimani concentrato...</span></center>
                            <center><span id= "game-button"></span></center>
                        </div>`;

    let name = document.getElementById('game-name');
    let sec = 3;

    let head = document.getElementById('game-head');

    const countdownInterval = setInterval(function() {
        sec--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${sec}</span>`;
        if (sec <= 0) {
            clearInterval(countdownInterval);
            section.innerHTML = `<div id="main-section" class="main-content">
            
            <center><span id = "game-head" class="main-head"></span></center>
            <center><span id="game-name" class="main-text"><span class="yellow-text"></span></span></center>
            <div id = "hanoi-section" class = "container" style="padding-top: 200px;">
                <div class="row">
                    <div id="pole1" class="col-4">						
                    </div>
                    <div id="pole2" class="col-4">
                    </div>
                    <div id="pole3" class="col-4">
                    </div>
                </div>
                <div class="row" style="margin-top:20px;">
                    <div class="col-4">
                        <center><button id="btn1" class="btn yellow-button" onclick="actionPole(1)">Prendi</button></center>
                    </div>
                    <div class="col-4">
                        <center><button id="btn2" class="btn yellow-button" onclick="actionPole(2)">Prendi</button></center>
                    </div>
                    <div class="col-4">
                        <center><button id="btn3" class="btn yellow-button" onclick="actionPole(3)">Prendi</button></center>
                    </div>
                </div>
                <div class="row">
                    <center>
                    <div class="col-4"></div>
                    <div id="myHand" class="col-4" style="padding: 30px;"></div>
                    <div class="col-4"></div>
                    </center>
                </div>
            </div>
            <center><span id = "game-info" class="main-subtext"></span></center>
            <center><span id= "game-button"></span></center>
            </div>`;

            drawScene();
            startTimer();
        }
    }, 1000);
}

function startGame_wordMemory() {
    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-spell-check fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Testiamo la tua memoria...</span></center>
                            <center><span id="game-button"></span></center>
                        </div>`;

    let name = document.getElementById('game-name');
    let seconds = 3;

    const countdownInterval = setInterval(function() {
        seconds--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${seconds}</span>`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);

                        let wordsArray = [
                "amore", "amori", "amorevole", "amorevolmente", "amoroso", "amorosamente",
                "amici", "amicizia", "amichevole", "amicone", "amicizia",
                "bello", "bella", "bellissimo", "bellezza", "bellezze", "bellamente",
                "biondo", "bionda", "biondina", "biondissimo", "biondezza", "bionde",
                "caldo", "calda", "caldissimo", "calorosamente", "caloroso", "calorosita'",
                "canto", "cantare", "cantato", "cantante", "cantando", "cantina",
                "caso", "casa", "casetta", "casolare", "casualmente", "casuale",
                "corpo", "corpi", "corporea", "corporeo", "corporeita'", "corposa",
                "cuore", "cuori", "cuorato", "cuoroso", "cuoricamente", "cuoricino",
                "dente", "denti", "dentale", "dentato", "dentarie", "dentatura",
                "dolce", "dolci", "dolcetto", "dolcissima", "dolcezza", "dolcemente",
                "estate", "estati", "estiva", "estivo", "estivale", "estivalmente",
                "fiore", "fiori", "fiorito", "fiorente", "fioritura", "fiorai",
                "frutto", "frutta", "fruttato", "fruttiera", "frutticoltura", "frutteti",
                "gatto", "gatta", "gattino", "gattone", "gattara", "gattaiola",
                "gioco", "giochi", "giocare", "giocato", "giocoso", "giocosamente",
                "luna", "lune", "lunare", "lunarmente", "lunatico", "lunaticamente",
                "mare", "mari", "marino", "marinara", "marittima", "marittimamente",
                "mela", "mele", "melone", "meloni", "melograno", "melodioso",
                "mondo", "mondi", "mondiale", "mondialmente", "mondanita'", "mondanamente",
                "notte", "notti", "notturno", "notturnamente", "notturnita'", "notturnamente",
                "ombra", "ombre", "ombroso", "ombreggiare", "ombreggiato", "ombreggiatura",
                "pane", "pani", "panettone", "panificio", "panificazione", "panificato",
                "pesce", "pesci", "pescare", "pescato", "pescatore", "pescheria",
                "pietra", "pietre", "pietroso", "pietrificare", "pietrificato", "pietrificazione",
                "ragazzo", "ragazza", "ragazzino", "ragazzona", "ragazzetto", "ragazzaglia",
                "sole", "soli", "solare", "solari", "solarmente", "solare",
                "stella", "stelle", "stellare", "stellato", "stelline", "stellina",
                "tempo", "tempi", "temporale", "temporaneamente", "temporaneo", "temporaneamente",
                "vento", "venti", "ventoso", "ventosita'", "ventosamente", "ventosita'",
                "vino", "vini", "vinificazione", "vinificato", "vinicolo", "vinicolamente",
                "zucchero", "zuccheri", "zuccheroso", "zuccherato", "zuccherificio", "zuccheriera"
            ];
            
            let parole_nuove = getRandomElements(wordsArray, 20);
            let parole_ripetute = [];
            let parole_totali = [];

            for(let i = 0; i < 20; i++) parole_totali.push(parole_nuove[i]);

            for(let i = 0; i < 10; i++) parole_ripetute.push(parole_nuove[i]);

            for (let i = 0; i < 10; i++) parole_totali[i + 20] = parole_ripetute[i];
            
            parole_totali = shuffleArray(parole_totali);

            section.innerHTML = `<div id="main-section" class="main-content">
                <center><span id="game-head" class="main-head"></span></center>
                <center><span id="game-name" class="main-text"><span class="yellow-text"></span></span></center>
                <div id="word-section" style="padding-top: 200px;">
                    <center><span id="game-score" class="game-score">Parola n. <span id="game-lvl" class="game-score">1</span> di ${parole_totali.length}<br><br></span></center>
                    <center><span id="word" class="word">${parole_totali[0]}</span></center><br>
                    <center><span id="word-check" class="word-check">Hai gia' visto questa parola?</span></center>
                    <center><button id="word-seen" class="btn word-button btn-success">Si</button> <button id="word-new" class="btn word-button btn-warning">No</button></center>
                </div>

                <center><span id="game-info" class="main-subtext"></span></center>
                <center><span id="game-button"></span></center>
            </div>`;

            console.log(parole_nuove);
            console.log(parole_ripetute);
            console.log(parole_totali);

            let counter = 1;

            let bottone_vista = document.getElementById("word-seen");
            let bottone_nuovo = document.getElementById("word-new");

            let parola_visualizzata = document.getElementById("word");
            let livello_visualizzato = document.getElementById("game-lvl");

            let points = 0;
            bottone_vista.onclick = function() {
                parola_visualizzata.innerText = parole_totali[counter];
                livello_visualizzato.innerText = counter +1;
                counter++;
                if(parole_ripetute.includes(parole_totali[counter])) points++;

                if(counter == 31) {
                    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-spell-check fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Hai totalizzato <span class="yellow-text">${points}</span> punti!</span></center>
                            <center><span id="game-button"><a href = "word-memory.html"><button class = "btn main-button">Gioca di nuovo!</button></a></span></center>
                        </div>`;
                }
            };

            bottone_nuovo.onclick = function() {
                parola_visualizzata.innerText = parole_totali[counter];
                livello_visualizzato.innerText = counter +1;
                counter++;
                if(parole_nuove.includes(parole_totali[counter])) points++;

                if(counter == 31) {
                    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-spell-check fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Hai totalizzato <span class="yellow-text">${points}</span> punti!</span></center>
                            <center><span id="game-button"><a href = "word-memory.html"><button class = "btn main-button">Gioca di nuovo!</button></a></span></center>
                        </div>`;
                }
            };
        }
    }, 1000);
}

function startGame_numberMemory() {
    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-arrow-up-9-1 fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Testiamo la tua memoria...</span></center>
                            <center><span id= "game-button"></span></center>
                        </div>`;

    let name = document.getElementById('game-name');
    let seconds = 3;

    const countdownInterval = setInterval(function() {
        seconds--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${seconds}</span>`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            startNumberMemoryGame(1);
        }
    }, 1000);
}

function startNumberMemoryGame(level) {
    let section = document.getElementById('game-section');
    let numero_generato = "";
    for (let i = 0; i < level; i++) {
        numero_generato += numero_casuale(0, 9);
    }

    section.innerHTML = `<div id="main-section" class="main-content">
                            <div id="number-section" style="padding-top: 200px;">
                                <center><span id="game-score" class="game-score">Livello n.<span id="level">${level}</span></span><br></center>
                                <center><span id="number" class="number">${numero_generato}</span></center>
                                <center>
                                <div id="progress" class="progress" style="width: 200px;" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div id="progress-inner" class="progress-bar bg-warning" style="width: 100%;"></div>
                                </div>
                                </center>
                            </div>
                            <div class="row" style="padding-top: 50px;">
                                <center><span id="game-info" class="main-subtext">Riesci a ricordare questo numero?</span></center>
                            </div>
                        </div>`;

    let progressBar = document.getElementById('progress-inner');
    let progressTime = 3000; // durata del timer della barra di progresso

    setTimeout(function() {
        progressBar.style.width = "0%";
        setTimeout(function() {
            showInputSection(numero_generato, level);
        }, progressTime);
    }, 100);
}

function startGame_guessTheFlag() {
    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-flag fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Come te la cavi in geografia?</span></center>
                            <center><span id= "game-button"></span></center>
                        </div>`;

    let name = document.getElementById('game-name');
    let seconds = 3;

    const countdownInterval = setInterval(function() {
        seconds--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${seconds}</span>`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            startFlagLevel(1);
        }
    }, 1000);
}

function startGame_mathSolver() {
    let section = document.getElementById('game-section');
    section.onclick = null;
    section.innerHTML = `<div id="main-section" class="main-content">
                            <center><span id="game-head"><i class="fa-solid fa-calculator fa-fade fa-8x main-icon"></i></span></center>
                            <center><span id="game-name" class="main-text">Il gioco inizia tra... <span class="yellow-text">3</span></span></center>
                            <center><span id="game-info" class="main-subtext">Come te la cavi in matematica?</span></center>
                            <center><span id= "game-button"></span></center>
                        </div>`;

    let name = document.getElementById('game-name');
    let seconds = 3;

    const countdownInterval = setInterval(function() {
        seconds--;
        name.innerHTML = `Il gioco inizia tra... <span class="yellow-text">${seconds}</span>`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            startMathLevel(1);
        }
    }, 1000);
}

/********************************************************* MATH SOLVER ***********************************************************************/

function startMathLevel(level) {
    let section = document.getElementById('game-section')

    section.innerHTML = `<div id="main-section" class="main-content">
            <div class="container">
            <div id="number-section" style="padding-top: 200px;">
                <center><span id="game-score" class="game-score">Livello n. ?</span></center>
                
                <center><span id="espressione" class="number">... =</span></center>
                
                <center><div class="input-group mb-3" style="width: 300px; padding-top: 30px;">
                            <input type="text" id="user-input" class="form-control" placeholder="Scrivi qui il risultato..." style="width: 100px;">
                        </div>
                </center>
            </div>
            <div class="row" style="padding-top: 30px;">
                <center><button class="btn btn-warning">Conferma il risultato</button></center>
            </div>
        </div>
    </div>`;

    let operatore = ["+", "-", "*"]
    let espressione = numero_casuale(0, 9) + "" + operatore[numero_casuale(0, operatore.length-1)] + "" + numero_casuale(0, 9) + "" + operatore[numero_casuale(0, operatore.length-1)] + "" + numero_casuale(0, 9);
    let risultato_corretto = eval(espressione);
    console.log(risultato_corretto);

    section.innerHTML = `<div id="main-section" class="main-content">
            <div class="container">
            <div id="number-section" style="padding-top: 200px;">
                <center><span id="game-score" class="game-score">Livello n. ${level}</span></center>
                
                <center><span id="espressione" class="number">${espressione} =</span></center>
                
                <center><div class="input-group mb-3" style="width: 300px; padding-top: 30px;">
                            <input type="text" id="user-input" class="form-control" placeholder="Scrivi qui il risultato..." style="width: 100px;">
                        </div>
                </center>
            </div>
            <div class="row" style="padding-top: 30px;">
                <center><button class="btn btn-warning" onclick="checkMathResult(${level}, '${risultato_corretto}')">Conferma il risultato</button></center>
            </div>
        </div>
    </div>`;
}


function checkMathResult(level, correct) {
    let user = document.getElementById('user-input').value;
    if(user == correct) startMathLevel(level + 1);
    else endMathGame(correct, user, level);

}

function endMathGame(correct, user, level) {
    let section = document.getElementById('game-section');
    section.innerHTML = `<div id = "main-section" class = "main-content">
        <center><span id = "game-head"><i class="fa-solid fa-calculator fa-8x main-icon"></i></span></center>
        <center><span id = "game-name" class = "main-text">Hai raggiunto il <span class="yellow-text">livello ${level}</span>!</span></center>
        <center><span id = "game-info" class="main-subtext"><i class="fa-solid fa-circle-check" style="color: #00ff04;"></i> Il risultato corretto era <span class="yellow-text">${correct}</span>.<br><i class="fa-solid fa-circle-exclamation" style="color:#ff9100"></i> Il risultato che hai inserito e' <span class="yellow-text">${user}</span>.</span></center>
        <center><span id= "game-button"></span></center>
    </div>`;

    let button = document.getElementById('game-button');
    button.innerHTML = `<a href = "math-solver.html"><button class = "btn main-button">Gioca di nuovo!</button></a>`;
}

/********************************************************************************************************************************/

/********************************************************* GUESS THE FLAG ***********************************************************************/


function startFlagLevel(level) {
    let section = document.getElementById('game-section')

    const countryCodes = [
        "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar",
        "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be",
        "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq",
        "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd",
        "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr",
        "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm",
        "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu",
        "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gb-eng", "gb-nir",
        "gb-sct", "gb-wls", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm",
        "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk",
        "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in",
        "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke",
        "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz",
        "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv",
        "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml",
        "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv",
        "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni",
        "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf",
        "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw",
        "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc",
        "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn",
        "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td",
        "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr",
        "tt", "tv", "tw", "tz", "ua", "ug", "um", "un", "us", "us-ak",
        "us-al", "us-ar", "us-az", "us-ca", "us-co", "us-ct", "us-de", "us-fl", "us-ga", "us-hi",
        "us-ia", "us-id", "us-il", "us-in", "us-ks", "us-ky", "us-la", "us-ma", "us-md", "us-me",
        "us-mi", "us-mn", "us-mo", "us-ms", "us-mt", "us-nc", "us-nd", "us-ne", "us-nh", "us-nj",
        "us-nm", "us-nv", "us-ny", "us-oh", "us-ok", "us-or", "us-pa", "us-ri", "us-sc", "us-sd",
        "us-tn", "us-tx", "us-ut", "us-va", "us-vt", "us-wa", "us-wi", "us-wv", "us-wy", "uy",
        "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws",
        "xk", "ye", "yt", "za", "zm", "zw"
    ];

    const countryNames = [
        "Andorra", "Emirati Arabi Uniti", "Afghanistan", "Antigua e Barbuda", "Anguilla", "Albania", "Armenia", "Angola", "Antartide", "Argentina",
        "Samoa Americane", "Austria", "Australia", "Aruba", "Isole Aland", "Azerbaigian", "Bosnia ed Erzegovina", "Barbados", "Bangladesh", "Belgio",
        "Burkina Faso", "Bulgaria", "Bahrein", "Burundi", "Benin", "Saint-Barthélemy", "Bermuda", "Brunei", "Bolivia", "Paesi Bassi caraibici",
        "Brasile", "Bahamas", "Bhutan", "Isola Bouvet", "Botswana", "Bielorussia", "Belize", "Canada", "Isole Cocos", "Congo (Rep. Dem.)",
        "Repubblica Centrafricana", "Congo", "Svizzera", "Costa d'Avorio", "Isole Cook", "Cile", "Camerun", "Cina", "Colombia", "Costa Rica",
        "Cuba", "Capo Verde", "Curaçao", "Isola di Natale", "Cipro", "Repubblica Ceca", "Germania", "Gibuti", "Danimarca", "Dominica",
        "Repubblica Dominicana", "Algeria", "Ecuador", "Estonia", "Egitto", "Sahara Occidentale", "Eritrea", "Spagna", "Etiopia", "Unione Europea",
        "Finlandia", "Figi", "Isole Falkland", "Micronesia", "Far Oer", "Francia", "Gabon", "Regno Unito", "Inghilterra", "Irlanda del Nord",
        "Scozia", "Galles", "Grenada", "Georgia", "Guyana francese", "Guernsey", "Ghana", "Gibilterra", "Groenlandia", "Gambia",
        "Guinea", "Guadalupa", "Guinea Equatoriale", "Grecia", "Georgia del Sud e Isole Sandwich Australi", "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hong Kong",
        "Isole Heard e McDonald", "Honduras", "Croazia", "Haiti", "Ungheria", "Indonesia", "Irlanda", "Israele", "Isola di Man", "India",
        "Territorio britannico dell'Oceano Indiano", "Iraq", "Iran", "Islanda", "Italia", "Baliato di Jersey", "Giamaica", "Giordania", "Giappone", "Kenya",
        "Kirghizistan", "Cambogia", "Kiribati", "Comore", "Saint Kitts e Nevis", "Corea del Nord", "Corea del Sud", "Kuwait", "Isole Cayman", "Kazakistan",
        "Laos", "Libano", "Santa Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lituania", "Lussemburgo", "Lettonia",
        "Libia", "Marocco", "Principato di Monaco", "Moldavia", "Montenegro", "Saint-Martin (Francia)", "Madagascar", "Isole Marshall", "Macedonia del Nord", "Mali",
        "Birmania", "Mongolia", "Macao", "Isole Marianne Settentrionali", "Martinica", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldive",
        "Malawi", "Messico", "Malesia", "Mozambico", "Namibia", "Nuova Caledonia", "Niger", "Isola Norfolk", "Nigeria", "Nicaragua",
        "Paesi Bassi", "Norvegia", "Nepal", "Nauru", "Niue", "Nuova Zelanda", "Oman", "Panama", "Perù", "Polinesia francese",
        "Papua Nuova Guinea", "Filippine", "Pakistan", "Polonia", "Saint-Pierre e Miquelon", "Isole Pitcairn", "Porto Rico", "Palestina", "Portogallo", "Palau",
        "Paraguay", "Qatar", "Riunione", "Romania", "Serbia", "Russia", "Ruanda", "Arabia Saudita", "Isole Salomone", "Seychelles",
        "Sudan", "Svezia", "Singapore", "Sant'Elena, Ascensione e Tristan da Cunha", "Slovenia", "Svalbard e Jan Mayen", "Slovacchia", "Sierra Leone", "San Marino", "Senegal",
        "Somalia", "Suriname", "Sudan del Sud", "São Tomé e Príncipe", "El Salvador", "Sint Maarten", "Siria", "Swaziland", "Turks e Caicos", "Ciad",
        "Terre australi e antartiche francesi", "Togo", "Thailandia", "Tagikistan", "Tokelau", "Timor Est", "Turkmenistan", "Tunisia", "Tonga", "Turchia",
        "Trinidad e Tobago", "Tuvalu", "Taiwan", "Tanzania", "Ucraina", "Uganda", "Isole minori esterne degli Stati Uniti d'America", "Organizzazione delle Nazioni Unite", "Stati Uniti d'America", "Alaska",
        "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii",
        "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine",
        "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "Carolina del Nord", "Dakota del Nord", "Nebraska", "New Hampshire", "New Jersey",
        "Nuovo Messico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "Carolina del Sud", "Dakota del Sud",
        "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "Virginia Occidentale", "Wyoming", "Uruguay",
        "Uzbekistan", "Città del Vaticano", "Saint Vincent e Grenadine", "Venezuela", "Isole Vergini britanniche", "Isole Vergini americane", "Vietnam", "Vanuatu", "Wallis e Futuna", "Samoa",
        "Kosovo", "Yemen", "Mayotte", "Sudafrica", "Zambia", "Zimbabwe"
    ];

    let correctIndex = Math.floor(Math.random() * countryCodes.length);
    let correctCode = countryCodes[correctIndex];
    let correctName = countryNames[correctIndex];

    // Generare risposte errate
    let wrongAnswers = [];
    while (wrongAnswers.length < 3) {
        let wrongIndex = Math.floor(Math.random() * countryNames.length);
        if (wrongIndex !== correctIndex && !wrongAnswers.includes(countryNames[wrongIndex])) {
            wrongAnswers.push(countryNames[wrongIndex]);
        }
    }

    // Mescolare le risposte
    let answers = [correctName, ...wrongAnswers];
    answers = answers.sort(() => Math.random() - 0.5);

    section.innerHTML = `<div id="main-section" class="main-content">
        <div id="number-section" style="padding-top: 100px;">
            <center><span id="game-score" class="game-score">Livello n.<span id="level">${level}</span></span><br></center>
            <center><span><img
                id="flag"
                class="flag"
                src="https://flagcdn.com/w160/${correctCode}.png"
                alt="Immagine di una bandiera"></span></center>
        </div>
        <div style="padding-top: 50px;">
            <center><span id="game-info" class="main-subtext">Di quale bandiera si tratta?</span></center>
            <div class="container">
                <div class="row">
                    ${answers.map((answer, index) => `
                        <div class="col-md-6">
                            <center><button class="btn gtf-button" onclick="checkAnswer('${answer}', '${correctName}', ${level})">${String.fromCharCode(65 + index)}. ${answer}</button></center>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

function checkAnswer(selectedAnswer, correctAnswer, currentLevel) {
    if (selectedAnswer == correctAnswer) {
        startFlagLevel(currentLevel + 1);
    } else {
        end_guessTheFlag(currentLevel, correctAnswer, selectedAnswer)
    }
}

function end_guessTheFlag(level, paese_corretto, userInput) {
    let section = document.getElementById('game-section');
    section.innerHTML = `<div id = "main-section" class = "main-content">
        <center><span id = "game-head"><i class="fa-solid fa-flag fa-8x main-icon"></i></span></center>
        <center><span id = "game-name" class = "main-text">Hai raggiunto il <span class="yellow-text">livello ${level}</span>!</span></center>
        <center><span id = "game-info" class="main-subtext"><i class="fa-solid fa-circle-check" style="color: #00ff04;"></i> Il paese corretto era <span class="yellow-text">${paese_corretto}</span>.<br><i class="fa-solid fa-circle-exclamation" style="color:#ff9100"></i> Il paese che hai scelto e' <span class="yellow-text">${userInput}</span>.</span></center>
        <center><span id= "game-button"></span></center>
    </div>`;

    let button = document.getElementById('game-button');
    button.innerHTML = `<a href = "guess-the-flag.html"><button class = "btn main-button">Gioca di nuovo!</button></a>`;
}
/********************************************************************************************************************************/

/*********************************************************** NUMBER MEMORY *********************************************************************/

function showInputSection(numero_generato, level) {
    let section = document.getElementById('game-section');
    section.innerHTML = `<div id="main-section" class="main-content">
                            <div id="number-section" style="padding-top: 200px;">
                                <center><span id="game-score" class="game-score">Livello n. ${level}</span></center>
                                <div class="row" style="padding-top: 50px;">
                                    <center><span id="insert-text" class="insert-text">Ti ricordi il numero appena mostrato?</span></center>
                                </div>
                                <center><div class="input-group mb-3" style="width: 300px; padding-top: 30px;">
                                            <input type="text" id="user-input" class="form-control" placeholder="Scrivi qui il numero..." style="width: 100px;">
                                        </div>
                                </center>
                            </div>
                            <div class="row" style="padding-top: 30px;">
                                <center><button class="btn btn-warning" onclick="checkUserInput('${numero_generato}', ${level})">Conferma il numero</button></center>
                            </div>
                        </div>`;
}

function checkUserInput(numero_generato, level) {
    let userInput = document.getElementById('user-input').value;
    if (userInput === numero_generato) {
        startNumberMemoryGame(level + 1);
    } else {
        end_numberMemory(level, numero_generato, userInput);
    }
}

function end_numberMemory(level, numero_generato, userInput) {
    let section = document.getElementById('game-section');
    section.innerHTML = `<div id = "main-section" class = "main-content">
        <center><span id = "game-head"><i class="fa-solid fa-arrow-up-9-1 fa-8x main-icon"></i></span></center>
        <center><span id = "game-name" class = "main-text">Hai raggiunto il <span class="yellow-text">livello ${level}</span>!</span></center>
        <center><span id = "game-info" class="main-subtext"><i class="fa-solid fa-circle-check" style="color: #00ff04;"></i> Il numero corretto era <span class="yellow-text">${numero_generato}</span>.<br><i class="fa-solid fa-circle-exclamation" style="color:#ff9100"></i> Il numero che hai inserito e' <span class="yellow-text">${userInput}</span>.</span></center>
        <center><span id= "game-button"></span></center>
    </div>`;

    let button = document.getElementById('game-button');
    button.innerHTML = `<a href = "number-memory.html"><button class = "btn main-button">Gioca di nuovo!</button></a>`;
}

/********************************************************************************************************************************/

/******************************************************* WORD MEMORY *************************************************************************/

function getRandomElements(arr, num) {
    let result = new Array(num);
    let len = arr.length;
    let taken = new Array(len);
    if (num > len) throw new RangeError("getRandomElements: more elements taken than available");
    while (num--) {
        let x = Math.floor(Math.random() * len);
        result[num] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function calcPoints(parole_totali, parole_nuove, parole_ripetute, risposte_nuove, risposte_viste) {
    let punti = 0;
    for (let i = 0; i < parole_totali.length; i++) {
        if (parole_nuove.includes(parole_totali[i]) && risposte_nuove.includes(parole_totali[i])) {
            punti++;
        }
        if (parole_ripetute.includes(parole_totali[i]) && risposte_viste.includes(parole_totali[i])) {
            punti++;
        }
    }
    console.log(punti);
}

// Utility functions
function getRandomElements(arr, num) {
    let result = new Array(num),
        len = arr.length,
        taken = new Array(len);
    if (num > len)
        throw new RangeError("getRandomElements: more elements taken than available");
    while (num--) {
        let x = Math.floor(Math.random() * len);
        result[num] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/********************************************************************************************************************************/

/****************************************************** TORRE DI HANOI ***********************************************************/

function drawScene(){
    drawPoles();
    drawHand();
    checkButtons();
}

function drawPoles(){
    for(let i=1;i<4;i++){
        drawPole(getPole(i), getDivPole(i));
    }
}

function getDivPole(n){
    return document.getElementById("pole"+n);
}

function drawPole(pole, div){
    div.innerHTML = "";
    for(let i=0; i<pole.length; i++){
        div.innerHTML+=drawDisk(pole[i]);
    }
}

function checkButtons(){
    for(let i=1;i<4;i++)
        checkButton(i);
}	

function getPole(n){
    switch(n){
        case 1: return pole1;
        case 2: return pole2;
        case 3: return pole3;
    }
}

function checkButton(n){
    let button = document.getElementById("btn" + n);
    let pole = getPole(n);
    if(mano==0){
        button.innerText = "Prendi";
        button.disabled = pole.length == 0;
    } else {
        button.innerText = "Metti";				
        button.disabled = pole.length > 0 ? pole[0] < mano : false;			
    }
}

function drawHand(){
    let handDiv = document.getElementById("myHand");
    handDiv.innerHTML = drawDisk(mano);
}

function actionPole(n){
    if(mano==0){
        mano = getPole(n).shift();
    } else {
        getPole(n).unshift(mano);
        mano = 0;
        moves++;
        checkWinCondition();
    }
    drawScene();
}

function getColor(dimension){
    let color = "#000000";
    switch(dimension){
        case 1:
            color = "#FF0000"; break;
        case 2:
            color = "#0000FF"; break;		
        case 3:
            color = "#00FF00"; break;
        case 4:
            color = "#FF7000"; break;
    }
    return color;
}

function drawDisk(dimension){
    let color = getColor(dimension);
    return '<div class="disk" style="background-color:'+color+'; width:'+dimension*10+'%;"></div>';
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById("game-info").innerHTML =  `<br>Presto! Il tempo scorre...<br><span class="yellow-text">`  + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + `</span>`;
    }
}

function stopTimer() {
    clearInterval(timerInterval)
    timerInterval = null;
}

function toggleTimer() {
    if (timerInterval) {
        stopTimer();
    } else {
        startTimer();
    }
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("game-info").innerHTML =  `<br>Presto! Il tempo scorre...<br><span class="yellow-text">`  + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + `</span>`;
}

function checkWinCondition() {
    if (pole3.length == totDischi) {
        stopTimer();
        showWinMessage();
    }
}

function showWinMessage() {
    document.getElementById("hanoi-section").style.display = "none";
    document.getElementById("game-head").innerHTML = `<i class="fa-solid fa-gopuram fa-8x main-icon"></i>`;

    let resultMessage;
    if (moves == 15) resultMessage = "Sei il maestro della torre!";
    else if (moves <= 20) resultMessage = "Ben fatto, ma puoi fare di meglio...";
    else if (moves <= 25) resultMessage = "Eh no! Non ci siamo ancora...";
    else resultMessage = "Mi prendi in giro!? Riproviamoci...";

    let timeDisplay = "";
    if (minutes > 0) {
        timeDisplay = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    } else {
        timeDisplay = (seconds < 10 ? "0" + seconds : seconds);
    }

    document.getElementById("game-name").innerHTML = `<span class="yellow-text"> ${moves}</span> mosse in <span class="yellow-text">` + timeDisplay + `</span> ` + (minutes > 0 ? "minuti" : "secondi") + `.`;

    document.getElementById("game-info").innerText = resultMessage;

    let button = document.getElementById('game-button');
    button.innerHTML = `<a href = "hanoi-tower.html"><button class = "btn main-button">Gioca di nuovo!</button></a>`;

}

/********************************************************************************************************************************/

/****************************************************** REACTION TIME ***********************************************************/

function numero_casuale(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/********************************************************************************************************************************/