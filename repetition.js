// JavaScript

var weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

// Hämta ur vår array

console.log("Exempel 1. Första veckodagen " + weekdays[0]);


var month = [];
month[0] = "Januari";
month[1] = "Februari";
month[2] = "Mars";
month[3] = "April";
month[4] = "Maj";
month[5] = "Juni";
month[6] = "Juli";
month[7] = "Augusti";
month[8] = "September";
month[9] = "Oktober";
month[10] = "November";
month[11] = "December";

console.log("Månad" + month[4]);
console.log("Jag är född i " + month[2]);

var car = {color: "ful", hasAWheel: true, numberOfSeats: 4};

var computer = {color: "grey", brand: "Mac"};

var student = {};
student.name = "Anton";
student.favoriteTeam = "AIK";

var anotherStudent = {};
student["name"] = "Oskar";
student["favoriteTeam"] = "HIF";

console.log ("Den första studenten heter" + student.name);
console.log ("Den andra studenten heter" + student["name"]);

var students = [student, anotherStudent];

console.log("Första studenten i array: " + students[0].name);
console.log("Andra studenten i array: " + students[1].name);

var favoriteGames = [["Super Mario Bros 1", "Duck Hunt"],["Wii Sports Resort", "Zelda Twilight Princess"]];

console.log("Andra spelet i första listan" + favoriteGames [0][1]);

var superMario64 = {title: "Super Mario 64", countries: ["Sverige", "USA"], characters: ["Mario", "Toad", "Peach"]};

console.log ("Första karaktären är " + superMario64.characters[0]);
console.log ("Andra landet är " + superMario64["countries"][1]);

var soccerPlayer = {name: "Zlatan", orginalClub: {name: "Malmö FF", playedInChampionsLeauge: true, founded: 1901}};


console.log("Året då Zlatans originalklubb startades " + soccerPlayer.originalClub.founded);
console.log("Zlatans orginalklubb heter " + soccerPlayer[originalClub][founded]);

