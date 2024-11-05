let random = 0; let bars = []; let song = ""; let cnt = 0; let mod = 0; let skipSong = 10; let err = 5;
let min; let max;

// Array con i titoli dei brani
let allSongs = ["Intro", "We Don't Care", "Graduation Day", "All Falls Down", "I'll Fly Away", "Spaceship", "Jesus Walks", "Never Let Me Down", "Get Em High", "Workout Plan", "The New Workout Plan", "Slow Jamz", "Breathe In Breathe Out", "School Spirit Skit #1", "School Spirit", "School Spirit Skit #2", "Lil Jimmy Skit", "Two Words", "Through The Wire", "Family Business", "Last Call", "Wake Up Mr West", "Heard 'Em Say", "Touch The Sky", "Gold Digger", "Skit #1", "Drive Slow", "My Way Home", "Crack Music", "Roses", "Bring Me Down", "Addiction", "Skit #2", "Diamonds from Sierra Leone (Remix)", "We Major", "Skit #3", "Hey Mama", "Celebration", "Skit #4", "Gone", "Late", "Good Morning", "Champion", "Stronger", "I Wonder", "Good Life", "Can't Tell Me Nothing", "Barry Bonds", "Drunk and Hot Girls", "Flashing Lights", "Everything I Am", "The Glory", "Homecoming", "Big Brother", "Good Night", "Say You Will", "Welcome to Heartbreak", "Heartless", "Amazing", "Love Lockdown", "Paranoid", "RoboCop", "Street Lights", "Bad News", "See You in My Nightmares", "Coldest Winter", "Pinocchio Story", "Dark Fantasy", "Gorgeous", "POWER", "All of the Lights (Interlude)", "All of the Lights", "Monster", "So Appalled", "Devil in a New Dress", "Runaway", "Hell of a Life", "Blame Game", "Lost in the World", "Who Will Survive in America", "No Church in the Wild", "Lift Off", "Ni**as in Paris", "Otis", "Gotta Have It", "New Day", "That's My Bitch", "Welcome to the Jungle", "Who Gon Stop Me", "Murder To Excellence", "Made in America", "Why I Love You", "Illest Motherfucker Alive", "H*A*M", "Primetime", "The Joy", "On Sight", "Black Skinhead", "I Am a God", "New Slaves", "Hold My Liquor", "I'm in It", "Blood on the Leaves", "Guilt Trip", "Send It Up", "Bound 2", "Ultralight Beam", "Father Stretch My Hands, Pt. 1", "Pt.2", "Famous", "Feedback", "Low Lights", "Highlights", "Freestyle 4", "I Love Kanye", "Waves", "FML", "Real Friends", "Wolves", "Frank's Track", "Siiiiiiiiilver Surffffeeeeer Intermission", "30 Hours", "No More Parties in LA", "Facts (Charlie Heat Version)", "Fade", "Saint Pablo", "I Thought About Killing You", "Yikes", "All Mine", "Wouldn't Leave", "No Mistakes", "Ghost Town", "Violent Crimes", "Feel the Love", "Fire", "4th Dimension", "Freeee (Ghost Town, Pt. 2)", "Reborn", "Kids See Ghosts", "Cudi Montage", "Every Hour", "Selah", "Follow God", "Closed on Sunday", "On God", "Everything We Need", "Water", "God Is", "Hands On", "Use This Gospel", "Jesus Is Lord", "Donda Chant", "Hurricane", "Moon", "Life of the Party", "Off The Grid", "Jail", "Praise God", "Come to Life", "Believe What I Say", "No Child Left Behind", "Up from the Ashes", "God Breathed", "Lord I Need You", "24", "Junya", "Never Abandon Your Family", "Donda", "Keep My Spirit Alive", "Heaven and Hell", "Remote Control", "Tell The Vision", "Jonah", "Pure Souls", "Ok Ok", "New Again", "Jesus Lord", "STARS", "KEYS TO MY LIFE", "PAID", "TALKING", "BACK TO ME", "HOODRAT", "DO IT", "PAPERWORK", "BURN", "FUK SUMN", "VULTURES", "CARNIVAL", "BEG FORGIVENESS", "PROBLEMATIC", "KING", "SLIDE", "TIME MOVING SLOW", "FIELD TRIP", "FRIED", "ISABELLA", "PROMOTION", "530", "DEAD", "FOREVER ROLLING", "BOMB", "RIVER", "FOREVER", "HUSBAND", "LIFESTYLE", "SKY CITY", "MY SOUL"]

// Array con variabili dei brani
let allVars = [intro, wedontcare, graduationday, allfallsdown, illflyaway, spaceship, jesuswalks, neverletmedown, getemhigh, workoutplan, thenewworkoutplan, slowjamz, breatheinbreatheout, schoolspiritskit1, schoolspirit, schoolspiritskit2, liljimmyskit, twowords, throughthewire, familybusiness, lastcall, wakeupmrwest, heardemsay, touchthesky, golddigger, skit1, driveslow, mywayhome, crackmusic, roses, bringmedown, addiction, skit2, diamondsfromsierraleoneremix, wemajor, skit3, heymama, celebration, skit4, gone, late, goodmorning, champion, stronger, iwonder, goodlife, canttellmenothing, barrybonds, drunkandhotgirls, flashinglights, everythingiam, theglory, homecoming, bigbrother, goodnight, sayyouwill, welcometoheartbreak, heartless, amazing, lovelockdown, paranoid, robocop, streetlights, badnews, seeyouinmynightmares, coldestwinter, pinocchiostory, darkfantasy, gorgeous, power, allofthelightsinterlude, allofthelights, monster, soappalled, devilinanewdress, runaway, hellofalife, blamegame, lostintheworld, whowillsurviveinamerica, nochurchinthewild, liftoff, niggasinparis, otis, gottahaveit, newday, thatsmybitch, welcometothejungle, whogonstopme, murdertoexcellence, madeinamerica, whyiloveyou, illestmotherfuckeralive, ham, primetime, thejoy, onsight, blackskinhead, iamagod, newslaves, holdmyliquor, iminit, bloodontheleaves, guilttrip, senditup, bound2, ultralightbeam, fatherstretchmyhandspt1, pt2, famous, feedback, lowlights, highlights, freestyle4, ilovekanye, waves, fml, realfriends, wolves, frankstrack, ssi, trentaore, nomorepartiesinla, factscharlieheatversion, fade, saintpablo, ithoughtaboutkillingyou, yikes, allmine, wouldntleave, nomistakes, ghosttown, violentcrimes, feelthelove, fire, fourthdimension, fgtpt2, reborn, kidsseeghosts, cudimontage, everyhour, selah, followgod, closedonsunday, ongod, everythingweneed, water, godis, handson, usethisgospel, jesusislord, dondachant, hurricane, moon, lifeoftheparty, offthegrid, jail, praisegod, cometolife, believewhatisay, nochildleftbehind, upfromtheashes, godbreathed, lordineedyou, ventiquattro, junya, neverabandonyourfamily, donda, keepmyspiritalive, heavenandhell, remotecontrol, tellthevision, jonah, puresouls, okok, newagain, jesuslord, stars, keystomylife, paid, talking, backtome, hoodrat, doit, paperwork, burn, fuksumn, vultures, carnival, begforgiveness, problematic, king, slide, timemovingslow, fieldtrip, fried, isabella, promotion, fivethirty, dead, foreverrolling, bomb, river, forever, husband, lifestyle, skycity, mysoul]

// Array con loghi
let logos = [ "./Logos/CD_Logo.png", "./Logos/LR_Logo.jpg", "./Logos/GR_Logo.png", "./Logos/8H_Logo.png", "./Logos/MF_Logo.png", "./Logos/YZ_Logo.png", "./Logos/TP_Logo.png", "./Logos/YE_Logo.png", "./Logos/KG_Logo.png", "./Logos/JK_Logo.png", "./Logos/DO_Logo.png", "./Logos/V1_Logo.png", "./Logos/V2_Logo.png"];

// Indice a caso dell'array con i loghi
let randomIndex = Math.floor(Math.random() * logos.length);

// Funzione avviata all'apertura della pagina
function load(){
  checkDEV();
  if(document.getElementById("mode").value = 1){ min = 1; max = 208; }
  randomSong(mod); 
  hide("playAgain"); hide("playAgain");
  hide("share");  hide("share"); 
}

// Funzione che modifica titolo e favicon del sito se l'url non è https://kanyeguess.com/
function checkDEV(){
  if(window.location.href != "https://kanyeguess.com/"){
    document.title = "[DEV] Kanye Guess"
    let faviconLink = document.querySelector("link[rel='icon']") || document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = "./FaviconDEV.png";
  }
}

// Funzione per generare set di canzoni
function genSet(){
  reset();
  let mode = parseInt(document.getElementById("mode").value);
  let bottomLogo = document.getElementById("bottomLogo");
  switch(mode){
    case 1: min = 1; max = 208; mod = 0; bottomLogo.src = "./Kanye/alr.jpg"; break;
    case 2: min = 1; max = 208; mod = 2; bottomLogo.src = "./Kanye/alr.jpg"; break;
    case 3: min = 1; max = 208; mod = 3; bottomLogo.src = "./Kanye/alr.jpg"; break;
    case 4: min = 1; max = 21;  bottomLogo.src = "./Covers/CD.jpg"; break;
    case 5: min = 22; max = 42; bottomLogo.src = "./Covers/LR.jpg"; break;
    case 6: min = 43; max = 56; bottomLogo.src = "./Covers/GR.jpg"; break;
    case 7: min = 57; max = 68; bottomLogo.src = "./Covers/8H.png"; break;
    case 8: min = 69; max = 81; bottomLogo.src = "./Covers/MF.jpg"; break;
    case 9: min = 82; max = 97; bottomLogo.src = "./Covers/WT.jpg"; break;
    case 10: min = 98; max = 107; bottomLogo.src = "./Covers/YZ.png"; break;
    case 11: min = 108; max = 127; bottomLogo.src = "./Covers/TP.jpg"; break;
    case 12: min = 128; max = 134; bottomLogo.src = "./Covers/YE.jpg"; break;
    case 13: min = 135; max = 141; bottomLogo.src = "./Covers/KG.png"; break;
    case 14: min = 142; max = 152; bottomLogo.src = "./Covers/JK.jpg"; break;
    case 15: min = 153; max = 180; bottomLogo.src = "./Covers/DO.jpeg"; break;
    case 16: min = 185; max = 192; bottomLogo.src = "./Covers/V1.png"; break;
    case 17: min = 193; max = 208; bottomLogo.src = "./Covers/V2.png"; break;
  }
  randomSong(mod);
}

// Funzione per generare una canzone random
function randomSong(mod){
  if(mod == 0){
    random = 1 + Math.floor(Math.random() * (max - min + 1)) + min;
    if(random < min || random > max){
      randomSong(mod);
    }
  }
  if(mod == 2){
    let values = [1, 3, 5, 9, 10, 13, 14, 16, 17, 21, 22, 25, 26, 33, 36, 39, 40, 42, 49, 50, 55, 60, 63, 65, 66, 68, 75, 83, 86, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97, 105, 106, 113, 114, 115, 136, 150, 151, 152, 163, 165, 166, 169, 170, 171, 173, 174, 175, 176, 178, 197, 207, 208, 211, 212, 215];
    random = values[Math.floor(Math.random() * values.length)];
  }
  if(mod == 3){
    let values = [4, 7, 19, 24, 25, 30, 43, 45, 46, 47, 48, 51, 54, 59, 61, 71, 73, 76, 77, 82, 84, 85, 93, 98, 99, 107, 109, 111, 116, 117, 120, 124, 130, 133, 134, 137, 144, 145, 155, 157, 159, 185, 188, 189, 193, 194, 196, 202, 203, 209];
    random = values[Math.floor(Math.random() * values.length)];
  }
  song = allVars[random];

randomBars();
}

// Funzione per generare testi a caso dalla canzone generata
function randomBars() {
  if (err === 0) {
    gameOver();
    return;
  }
  bars = [];
  var length = song.length; 
  var linesToShow = 4;
  var randomB = Math.floor(Math.random() * Math.max(length - linesToShow + 1, 1)); 
  for (var i = 0; i < linesToShow; i++) {
    bars.push(song[randomB + i]);
  }
  document.getElementById("bars").innerHTML = bars.join('<br>');
}


// Funzione di game over
function gameOver() {
  hide("submit"); hide("submit");
  hide("skip"); hide("skip");
  document.getElementById("bars").innerHTML = '<h1 style="margin-bottom: 0px;">Game Over!</h1><p>You lost all your lives... Better luck next time!</p>';
  show("playAgain"); show("playAgain");
  show("share"); show("share");
  hide("kanye-songs"); hide("kanye-songs");
}

// Funzione richiamata quando si clicca su "Skip"
function skip() {
  if (skipSong > 0) {
    skipSong--;
    document.getElementById("skipp").innerHTML = "<b>Skips: </b>" + skipSong;
    getSong(1); 
    randomSong(mod);
  } 
  else {
    hide("skip"); hide("skip");
  }
}

// Funzione che controlla se la canzone è corretta, richiama getSong() e randomSong() per generare la successiva
function check() {
  let selected = document.getElementById("yelist").querySelector('option[value="' + document.getElementById("kanye-songs").value + '"]').id;
  document.getElementById("kanye-songs").value = "";
  if (parseInt(selected) === random + 1) {
    getSong(2);
  }
  else {
    err--;
    poopityScoop();
    if (err < 0) {
      gameOver();
    } 
    else {
      document.getElementById("vite").innerHTML = `<b>Lives: </b>${err}`;
      getSong(0);
    }
  }
  document.getElementById("streak").innerHTML = `<b>Score:</b> ${cnt}`;
  randomSong(mod);
}

// Funzione che stampa messaggi in base all'esito
function getSong(act){
  if (err == 0) {
    gameOver();
    return;
  }

  let songTitle = allSongs[random]; 
  let message = "";

  // Se la canzone
if (act == 0) { 
    message = `<i style="color: #ff7070;">Wrong! The song was <b style="color: #ff7070;">"${songTitle}".</b></i>`;
} 
else if (act == 1) { 
    message = `<i>The song you just skipped was <b>"${songTitle}".</b></i>`; 
} 
else if (act == 2) { 
    playE(); 
    message = `<i style="color: #70ff77;">Correct! The song was <b style="color: #70ff77;">"${songTitle}".</b></i>`; 
    cnt++; 
}
  document.getElementById("result").innerHTML = message;
}

// Funzione per resettare la partita
function reset(){
  random = ""; bars = []; song = ""; cnt = 0; skipSong = 10; err = 5;
  document.getElementById("vite").innerHTML = "<b>Lives: </b>" + err;
  document.getElementById("skipp").innerHTML = "<b>Skips: </b>" + skipSong;
  document.getElementById("streak").innerHTML = "<b>Score: </b>" + cnt;
  document.getElementById("result").innerHTML = "<i>Song results will appear here. Good luck!</i>"
}

// Funzione per copiare negli appunti il punteggio
function copyScore() {
  const message = `I just scored ${cnt} on KanyeGuess! Think you can beat me? Check it out here: https://kanyeguess.com`;
  navigator.clipboard.writeText(message)
    .then(() => alert("Score copied to clipboard!"))
    .catch(err => console.error("Error copying text:", err));
}

// Funzioni per far partire tag HTML audio
function playE(){ document.getElementById("runaway").play(); }
function poopityScoop(){ document.getElementById("poopityscoop").play(); }

// Quando il DOM è caricato completamente, viene impostata un'immagine dall'array logos
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("logo")) {
    document.getElementById("logo").src = logos[randomIndex];
    document.getElementById("logo").addEventListener("click", clickImage);
  }
});

// Il logo cambia ogni volta che ci si clicca sopra
function clickImage() {
  randomIndex = (randomIndex + 1) % logos.length;
  document.getElementById("logo").src = logos[randomIndex]; 
}

// Funzione per nasconde bottoni e sezioni
function hide(a) {
  let x = document.getElementById(a);
  x.style.display = "none";
}

// Funzione per mostrare bottoni e sezioni
function show(a) { 
  let x = document.getElementById(a);
  if(x.style.display === "none"){x.style.display = "flex";}
}
