let random = 0; let bars = []; let song = ""; let cnt = 0; let mod = 0; let skipSong = 10; let err = 5; let checkIG = true;
let min; let max;

// Array con i titoli dei brani
let allSongs = ["Intro", "We Don't Care", "Graduation Day", "All Falls Down", "I'll Fly Away", "Spaceship", "Jesus Walks", "Never Let Me Down", "Get Em High", "Workout Plan", "The New Workout Plan", "Slow Jamz", "Breathe In Breathe Out", "School Spirit Skit #1", "School Spirit", "School Spirit Skit #2", "Lil Jimmy Skit", "Two Words", "Through The Wire", "Family Business", "Last Call", "Wake Up Mr West", "Heard 'Em Say", "Touch The Sky", "Gold Digger", "Skit #1", "Drive Slow", "My Way Home", "Crack Music", "Roses", "Bring Me Down", "Addiction", "Skit #2", "Diamonds from Sierra Leone (Remix)", "We Major", "Skit #3", "Hey Mama", "Celebration", "Skit #4", "Gone", "Late", "Good Morning", "Champion", "Stronger", "I Wonder", "Good Life", "Can't Tell Me Nothing", "Barry Bonds", "Drunk and Hot Girls", "Flashing Lights", "Everything I Am", "The Glory", "Homecoming", "Big Brother", "Good Night", "Say You Will", "Welcome to Heartbreak", "Heartless", "Amazing", "Love Lockdown", "Paranoid", "RoboCop", "Street Lights", "Bad News", "See You in My Nightmares", "Coldest Winter", "Pinocchio Story", "Dark Fantasy", "Gorgeous", "POWER", "All of the Lights (Interlude)", "All of the Lights", "Monster", "So Appalled", "Devil in a New Dress", "Runaway", "Hell of a Life", "Blame Game", "Lost in the World", "Who Will Survive in America", "No Church in the Wild", "Lift Off", "Ni**as in Paris", "Otis", "Gotta Have It", "New Day", "That's My Bitch", "Welcome to the Jungle", "Who Gon Stop Me", "Murder To Excellence", "Made in America", "Why I Love You", "Illest Motherfucker Alive", "H*A*M", "Primetime", "The Joy", "On Sight", "Black Skinhead", "I Am a God", "New Slaves", "Hold My Liquor", "I'm in It", "Blood on the Leaves", "Guilt Trip", "Send It Up", "Bound 2", "Ultralight Beam", "Father Stretch My Hands, Pt. 1", "Pt.2", "Famous", "Feedback", "Low Lights", "Highlights", "Freestyle 4", "I Love Kanye", "Waves", "FML", "Real Friends", "Wolves", "Frank's Track", "Siiiiiiiiilver Surffffeeeeer Intermission", "30 Hours", "No More Parties in LA", "Facts (Charlie Heat Version)", "Fade", "Saint Pablo", "I Thought About Killing You", "Yikes", "All Mine", "Wouldn't Leave", "No Mistakes", "Ghost Town", "Violent Crimes", "Feel the Love", "Fire", "4th Dimension", "Freeee (Ghost Town, Pt. 2)", "Reborn", "Kids See Ghosts", "Cudi Montage", "Every Hour", "Selah", "Follow God", "Closed on Sunday", "On God", "Everything We Need", "Water", "God Is", "Hands On", "Use This Gospel", "Jesus Is Lord", "Donda Chant", "Hurricane", "Moon", "Life of the Party", "Off The Grid", "Jail", "Praise God", "Come to Life", "Believe What I Say", "No Child Left Behind", "Up from the Ashes", "God Breathed", "Lord I Need You", "24", "Junya", "Never Abandon Your Family", "Donda", "Keep My Spirit Alive", "Heaven and Hell", "Remote Control", "Tell The Vision", "Jonah", "Pure Souls", "Ok Ok", "New Again", "Jesus Lord", "STARS", "KEYS TO MY LIFE", "PAID", "TALKING", "BACK TO ME", "HOODRAT", "DO IT", "PAPERWORK", "BURN", "FUK SUMN", "VULTURES", "CARNIVAL", "BEG FORGIVENESS", "PROBLEMATIC", "KING", "SLIDE", "TIME MOVING SLOW", "FIELD TRIP", "FRIED", "ISABELLA", "PROMOTION", "530", "DEAD", "FOREVER ROLLING", "BOMB", "RIVER", "FOREVER", "HUSBAND", "LIFESTYLE", "SKY CITY", "MY SOUL"]

// Array con variabili dei brani
let allVars = [intro, wedontcare, graduationday, allfallsdown, illflyaway, spaceship, jesuswalks, neverletmedown, getemhigh, workoutplan, thenewworkoutplan, slowjamz, breatheinbreatheout, schoolspiritskit1, schoolspirit, schoolspiritskit2, liljimmyskit, twowords, throughthewire, familybusiness, lastcall, wakeupmrwest, heardemsay, touchthesky, golddigger, skit1, driveslow, mywayhome, crackmusic, roses, bringmedown, addiction, skit2, diamondsfromsierraleoneremix, wemajor, skit3, heymama, celebration, skit4, gone, late, goodmorning, champion, stronger, iwonder, goodlife, canttellmenothing, barrybonds, drunkandhotgirls, flashinglights, everythingiam, theglory, homecoming, bigbrother, goodnight, sayyouwill, welcometoheartbreak, heartless, amazing, lovelockdown, paranoid, robocop, streetlights, badnews, seeyouinmynightmares, coldestwinter, pinocchiostory, darkfantasy, gorgeous, power, allofthelightsinterlude, allofthelights, monster, soappalled, devilinanewdress, runaway, hellofalife, blamegame, lostintheworld, whowillsurviveinamerica, nochurchinthewild, liftoff, niggasinparis, otis, gottahaveit, newday, thatsmybitch, welcometothejungle, whogonstopme, murdertoexcellence, madeinamerica, whyiloveyou, illestmotherfuckeralive, ham, primetime, thejoy, onsight, blackskinhead, iamagod, newslaves, holdmyliquor, iminit, bloodontheleaves, guilttrip, senditup, bound2, ultralightbeam, fatherstretchmyhandspt1, pt2, famous, feedback, lowlights, highlights, freestyle4, ilovekanye, waves, fml, realfriends, wolves, frankstrack, ssi, trentaore, nomorepartiesinla, factscharlieheatversion, fade, saintpablo, ithoughtaboutkillingyou, yikes, allmine, wouldntleave, nomistakes, ghosttown, violentcrimes, feelthelove, fire, fourthdimension, fgtpt2, reborn, kidsseeghosts, cudimontage, everyhour, selah, followgod, closedonsunday, ongod, everythingweneed, water, godis, handson, usethisgospel, jesusislord, dondachant, hurricane, moon, lifeoftheparty, offthegrid, jail, praisegod, cometolife, believewhatisay, nochildleftbehind, upfromtheashes, godbreathed, lordineedyou, ventiquattro, junya, neverabandonyourfamily, donda, keepmyspiritalive, heavenandhell, remotecontrol, tellthevision, jonah, puresouls, okok, newagain, jesuslord, stars, keystomylife, paid, talking, backtome, hoodrat, doit, paperwork, burn, fuksumn, vultures, carnival, begforgiveness, problematic, king, slide, timemovingslow, fieldtrip, fried, isabella, promotion, fivethirty, dead, foreverrolling, bomb, river, forever, husband, lifestyle, skycity, mysoul]

// Array con loghi
let logos = [ "./Logos/CD_Logo.png", "./Logos/LR_Logo.jpg", "./Logos/GR_Logo.png", "./Logos/8H_Logo.png", "./Logos/MF_Logo.png", "./Logos/YZ_Logo.png", "./Logos/TP_Logo.png", "./Logos/YE_Logo.png", "./Logos/KG_Logo.png", "./Logos/JK_Logo.png", "./Logos/DO_Logo.png", "./Logos/V1_Logo.png", "./Logos/V2_Logo.png"];

let hints = [
  /* Intro */ 'It\'s a skit from "The College Dropout"',
  /* We Don't Care */ 'Drug dealing',
  /* Graduation Day */ 'It\'s a skit from "The College Dropout"',
  /* All Falls Down */ 'It\'s one of Kanye\'s most popular songs, it has around 700k streams on Spotify',
  /* I'll Fly Away */ 'It\'s a skit from "The College Dropout"',
  /* Spaceship */ '\"Elon, where my rocketship?\"',
  /* Jesus Walks */ 'Since Kanye made this song, he\'s never going to hell...',
  /* Never Let Me Down */ 'It features Jay-Z',
  /* Get Em High */ 'The title of this song is referring to hands...',
  /* Workout plan */ 'It\'s a skit from "The College Dropout"',
  /* The New Workout Plan */ 'This song plays when you play a specific VHS tape...',
  /* Slow Jamz */ 'This song has one of the craziest flows on a 2000s hip-hop song, but it was not performed by Kanye...',
  /* Breathe In Breathe Out */ 'If you do a particular relaxiation practice, you might find the name of this song...',
  /* School Spirit Skit #1 */ 'It\'s a skit from "The College Dropout"',
  /* School Spirit */ 'α, ω, κ, σ, Δ, δ, Σ, ρ, ζ...',
  /* School Spirit Skit #2 */ 'It\'s a skit from "The College Dropout"',
  /* Lil Jimmy Skit */ 'It\'s a skit from "The College Dropout"',
  /* Two Words */ 'It features Mos Def',
  /* Through The Wire */ 'It samples an 80s song by Chaka Khan',
  /* Family Business */ 'Don\'t tell Kanye\'s girl he used to pee in the bed...',
  /* Last Call */ 'One of the longest Kanye songs',
  /* Wake Up Mr West! */ 'It\'s a skit from "Late Registration"',
  /* Heard 'Em Say */ 'It matches perfectly with the ending of another song...',
  /* Touch The Sky */ 'It features Lupe Fiasco',
  /* Gold Digger */ 'This song is so famous that even your mom probably heard it without realizing it was made by Kanye',
  /* Skit #1 */ 'It\'s a skit from "Late Registration"',
  /* Drive Slow */ 'You need to pump your brakes and reflect for a while, homie...',
  /* My Way Home */ 'It features Common',
  /* Crack Music */ 'It features The Game. Also, if you\'re reading this, you lost the game.',
  /* Roses */ 'You probably have this song in your sad music playlist',
  /* Bring Me Down */ 'It features Brandy',
  /* Addiction */ 'It\'s considered a deep cut by many fans and it\'s from "Late Registration"',
  /* Skit #2 */ 'It\'s a skit from "Late Registration"',
  /* Diamonds From Sierra Leone (Remix) */ 'Think about any jewelry store. What do they sell there?',
  /* We Major */ 'I added hints and I ain\'t know what to write...',
  /* Skit #3 */ 'It\'s a skit from "Late Registration"',
  /* Hey Mama */ 'One of the most heartful Kanye songs...',
  /* Celebration */ 'Grab a drink, grab a glass...',
  /* Skit #4 */ 'It\'s a skit from "Late Registration but it\'s kinda sus..."',
  /* Gone */ 'It features Consequence',
  /* Late */ 'This song has a weird ass laugh in it...',
  /* Good Morning */ 'It samples a 70s song by Elton John',
  /* Champion */ 'It samples a 70s song by Steely Dan',
  /* Stronger */ 'It samples a 2000s song by Daft Punk',
  /* I Wonder */ 'This song was really popular on TikTok back in 2023',
  /* Good Life */ 'It samples "PYT" by Micheal Jackson',
  /* Can't Tell Me Nothing */ 'Ye performed this song at a Travis Scott concert in Rome back in 2023',
  /* Barry Bonds */ 'This song is named after a baseball player',
  /* Drunk and Hot Girls */ 'Many people consider this the worst Kanye song',
  /* Flashing Lights */ 'Many people know this song thanks to a perfume commercial',
  /* Everything I Am */ 'This song was used on a meme that went popular a few years ago. It features a kid with a backpack walking on a sidewalk.',
  /* The Glory */ 'It samples a 60s song by Laura Nyro',
  /* Homecoming */ 'This song features a member of Coldplay',
  /* Big Brother */ 'This song is dedicated to Jay-Z',
  /* Good Night */ 'It features Mos Def',
  /* Say You Will */ 'An athmospheric track from "808s and Heartbreak"',
  /* Welcome to Heartbreak */ 'It features Kid Cudi',
  /* Heartless */ 'It\'s one of the most streamed Kanye songs of all time',
  /* Amazing */ 'It features Jeezy',
  /* Love Lockdown */ 'It was first realeased a single and it was even promoted by Apple in an iPod commercial',
  /* Paranoid */ 'It\'s Piga\'s favorite track on "808s and Heartbreak"',
  /* RoboCop */ 'It\'s centered around... robots...',
  /* Street Lights */ 'Piga\'s dad shazammed this song back in 2017, I think he liked it',
  /* Bad News */ 'It\'s a song about inevitable downfall, with heavy Auto-Tune.',
  /* See You In My Nightmares */ 'It features Lil Wayne',
  /* Coldest Winter */ 'Piga used to listen to this when he felt nostalgia of his ex-girlfriend',
  /* Pinocchio Story */ 'It\'s probably the most personal Kanye song. It was recorded from a concert in Singapore.',
  /* Dark Fantasy */ 'It\'s one of the most iconic intros of all time. The very first part is performed by Nicki Minaj',
  /* Gorgeous */ 'It featues Kid Cudi',
  /* POWER */ 'It contains a subtle reference to Kanye\'s past suicidal thoughts.',
  /* All of the Lights (Interlude) */ 'This song actually has no lyrics at all. You might get it if you think about it for a while.',
  /* All of the Lights */ 'Olive delights',
  /* Monster */ 'It features Jay-Z',
  /* So Appalled */ 'It features Jay-Z',
  /* Devil in a New Dress */ 'It features Rick Ross',
  /* Runaway */ 'Piga\'s dad discovered this song while he was with him at the Vultures listening party in Bologna and he absolutely fell in love with it',
  /* Hell of a Life */ 'You probably shouldn\'t play this song out loud next to your mom',
  /* Blame Game */ 'It features John Legend',
  /* Lost in the World */ 'It features Bon Iver',
  /* Who Will Survive in America */ 'It matches perfectly with the ending of another song...',
  /* No Church in the Wild */ 'Piga\'s ex-girlfriend has a bar from this song as her WhatsApp bio',
  /* Lift Off */ 'It features Beyoncé. Thanks, Beyoncé',
  /* Ni**as in Paris */ 'This song is about a particular group of individuals in a city located in France known worldwide for its culture and monuments.',
  /* Otis */ 'The artist sampled in this song is literally the name of the song itself...',
  /* Gotta Have It */ 'This song features a sample from a classic hit by The Jackson 5.',
  /* New Day */ 'This song features Jay-Z and Kanye reflecting on their past mistakes',
  /* That's My Bitch */ 'This song features Jay-Z and Kanye reflecting on their, well... ideal woman...',
  /* Welcome to the Jungle */ 'This song is about surviving in a tough world',
  /* Who Gon Stop Me */ 'This song is the feeling of being unstoppable',
  /* Murder to Excellence */ 'This song is about violence in the black community',
  /* Made in America */ 'It features Frank Ocean',
  /* Why I Love You */ 'It features Mr Hudson',
  /* Illest Motherfucker Alive */ 'In this song, Kanye and Jay-Z claim the #1 spot in the rap game',
  /* H*A*M */ 'The title of this song is an acronym',
  /* Primetime */ 'This song reflects on fame and all the pressures that come with it',
  /* The Joy */ 'It features Curtis Mayfield',
  /* On Sight */ 'This song features a heavenly part right in the middle of it',
  /* Black Skinhead */ 'A song on "UTOPIA" by Travis Scott uses drums similar to those used in this song',
  /* I Am A God */ 'This song features a vocal sample from a Jamaican artist',
  /* New Slaves */ 'It samples a 60s track by Hungarian band Omega',
  /* Hold My Liquor */ 'This song features an amazing electric guitar solo',
  /* I'm in It */ 'You probably shouldn\'t play this song out loud next to your mom',
  /* Blood on the Leaves */ 'It samples a 60s song by Nina Simone',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
  'No hint was made for this song, yet. Sorry!',
]

function hint(){
  show("overlayHints");
  document.getElementById("overlayParagraph").innerHTML = hints[random];
}

function checkBirthday() {
    const today = new Date();
    const birthDate = new Date(2007, 11, 11);
    const thisYearBirthday = new Date(today.getFullYear(), 11, 11);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today < thisYearBirthday) {
        age--;
    }

    if (today.getDate() === 11 && today.getMonth() === 11) {
        alert(`🎂 It's Piga's birthday! He turns ${age} today. Go send him a happy birthday message on his Instagram DMs: @iosonopiga.`);
    }
}

// Funzione avviata all'apertura della pagina
function load(){
  checkBirthday();
  checkDEV();
  if(document.getElementById("mode").value = 1){ min = 1; max = 208; }
  randomSong(mod); 
  hide("playAgain");
  hide("share");
}

// Funzione che modifica titolo e favicon del sito se l'url non è https://kanyeguess.com/
function checkDEV(){
  if(window.location.href != "https://kanyeguess.com/"){
    document.title = "[DEV] Kanye Guess"
    let faviconLink = document.querySelector("link[rel='icon']") || document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = "./Assets/FaviconDEV.png";
  }
}

// Funzione per generare set di canzoni
function genSet(){
  reset();
  let mode = parseInt(document.getElementById("mode").value);
  let bottomLogo = document.getElementById("bottomLogo");
  switch(mode){
    case 1: min = 1; max = 208; mod = 0; break;
    case 2: min = 1; max = 208; mod = 2; break;
    case 3: min = 1; max = 208; mod = 3; break;
    case 4: min = 1; max = 21; break;
    case 5: min = 22; max = 42; break;
    case 6: min = 43; max = 56; break;
    case 7: min = 57; max = 68; break;
    case 8: min = 69; max = 81; break;
    case 9: min = 82; max = 97; break;
    case 10: min = 98; max = 107; break;
    case 11: min = 108; max = 127; break;
    case 12: min = 128; max = 134; break;
    case 13: min = 135; max = 141; break;
    case 14: min = 142; max = 152; break;
    case 15: min = 153; max = 180; break;
    case 16: min = 185; max = 192; break;
    case 17: min = 193; max = 208; break;
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
  show("gameOverlay");
  document.getElementById("finalScore").innerHTML = '<b class="overlayThicc" style="background-color: #242424;">' + cnt + '</b>';
  document.getElementById("finalSkips").innerHTML = '<b class="overlayThicc" style="background-color: #242424;">' + (10 - skipSong) + '</b>';
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
  let randomIG = Math.floor(Math.random() * 15) + 1;
  if(randomIG == 15){ 
    if(checkIG) {show("overlayInstagram"); checkIG = false}
  }
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

// Esegui il codice solo dopo che il DOM è completamente caricato
document.addEventListener("DOMContentLoaded", function() {
  // Imposta un indice casuale iniziale per partire da un logo casuale
  let currentIndex = Math.floor(Math.random() * logos.length);

  // Imposta l'immagine iniziale
  document.getElementById("logo").src = logos[currentIndex];

  // Funzione che cambia il logo al clic
  function clickImage() {
    // Incrementa l'indice e torna a zero se supera la lunghezza dell'array
    currentIndex = (currentIndex + 1) % logos.length;
    document.getElementById("logo").src = logos[currentIndex];
  }

  // Aggiungi l'event listener per il clic sull'immagine
  document.getElementById("logo").addEventListener("click", clickImage);
});

// Funzione segreta, easter egg a Sonic CD
function sonic() {
  let fm = document.getElementById("fm").value;
  let pcm = document.getElementById("pcm").value;
  let da = document.getElementById("da").value;
  if(fm == 46 && pcm == 12 && da == 25){
    window.location.href = "./Assets/sonic.html";
  }
  else{
    document.backgroundColor = "#181818";
  }
}

// Funzione per nasconde bottoni e sezioni
function hide(a) {
  let x = document.getElementById(a);
  x.style.display = "none";
  x.style.display = "none";
}

// Funzione per mostrare bottoni e sezioni
function show(a) { 
  let x = document.getElementById(a);
  if(a == "hint"){
    x.style.display = "inline";
    x.style.display = "inline";
  }
  else{
    x.style.display = "flex";
    x.style.display = "flex";
  }
  
}
