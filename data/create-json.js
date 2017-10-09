var fs = require('fs');
var readline = require('readline');
var objArray = []; //placeholder for person objects

var r1 = readline.createInterface(process.stdin,process.stdout);


/*
//TEMPLATE
var x = {

	name: " ",
	author: " ",
	link: " ",
	description: " ",
	tech: " ",
	course: " ",
	custom: [" "],
	img_url:

};
pushToArray(x);
*/

function pushToArray(obj){
	objArray.push(obj);
}

var person1 = {

	name: "Breeding Rhythms",
	author: "Abhimanyu Vasishth",
	link: "http://breedingrhythms.herokuapp.com",
	description: "New generations of 8 rhythms each are created based on the rhythms you like.",
	tech: "Digital",
	course: "Mashups",
	custom: ["music", "genetic-algorithms"],
	hashtag: "#music, #genetic-algorithms",
	img_url: "../img/Abhi/img.png",
	index: "1"

};
pushToArray(person1);

var person2 = {

	name: "Imagine Science 2015 Home Screen",
	author: "Craig Protzel",
	link: "https://imaginescience.herokuapp.com",
	description: "Interactive collaborative drawing app built with p5.js and socket.io",
	tech: "Digital",
	course: "Mashups",
	custom: ["health", "data-visualization"],
	hashtag: "#p5.js, #socket.io",
	img_url: "../img/Craig/img.png",
	index: "2"

};
pushToArray(person2);

var person3 = {

	name: "Tlönator",
	author: "Luis Morales Navarro",
	link: "http://www.materialfictions.com/capstone/",
	description: "“Tlönator” is a system that translates texts from English to Tlönized English",
	tech: "Digital",
	course: "Mashups",
	custom: ["health", "data-visualization"],
	hashtag: "#mashups, #digital, #data-visualization",
	img_url: "../img/Luis/img.png",
	index: "3"

};
pushToArray(person3);


var person4 = {

	name: "Malaria Persists",
	author: "Shujaat Mirza",
	link: "http://www.msm622.nyuad.im/MalariaPersists",
	description: "Mashups project that visualises WHO data about Malaria cases from 2000 onwards.",
	tech: "Digital",
	course: "Mashups",
	custom: ["health", "data-visualization"],
	hashtag: "#mashups #data-visualization",
	img_url: "../img/Shujaat/img.png",
	index: "4"
};
pushToArray(person4);

var person5 = {

	name: "CONCRÈTE",
	author: "Fah Daengdej",
	link: "http://cargocollective.com/musique-concrete",
	description: "Paper interface DIY kit that aims to foster creative ways of noticing everyday sounds’ musical and narrative potential.",
	tech: "Physical",
	course: "other",
	custom: ["health"],
	hashtag: "#physical #softcircuits",
	img_url: "../img/Fah/img.png",
	index: "5"

};
pushToArray(person5);

var person6 = {

	name: "CORNELIUS",
	author: "Maddie Moore, Nada ElAzhary, Reine Defranco",
	link: "http://nme247.nyuad.im/Animation%20project/Animation.html",
	description: "Animation featuring two little creatures:Cornelius and his best friend, Wendell",
	tech: "digital",
	course: "other",
	custom: [],
	hashtag: "#digital #animation #commlab",
	img_url: "../img/Maddie_Nada_Raine/img.png",
	index: "6"

};
pushToArray(person6);

var jsonFile = JSON.stringify(objArray);



if(!fs.existsSync('projects-data.json')){
	fs.writeFile('projects-data.json', jsonFile, function (err) {
  	if (err) return console.log(err);
  	console.log("we created a new file!");
	});
}else{
	r1.question("The file already exists. Do you want to overwrite it? (Y/N)", function(answer){
		if(answer.toLowerCase().trim() == 'y'){
			fs.writeFile('projects-data.json', jsonFile, function (err) {
				if (err) return console.log(err);
				console.log("we overwrote the data file");
				r1.close();
			});
		}else{
			console.log("you are undecided");
			r1.close();
		};

		
	});
	
};


r1.on('close',function(){
	console.log("closing the interface");
	process.exit();
});