var fs = require('fs');
// var readline = require('readline');
var projects; //placeholder for person objects

console.log("starting the process!");
fs.readFile('data/projects_data.json', (err, data) => {
  if (err) throw err;

	var parsed_data = JSON.parse(data);
	projects = parsed_data.all_projects;
	create_individual_json_files(projects);
});

function create_individual_json_files(proj_array){
	for(var i = 0; i < proj_array.length; i++){
		var dir = __dirname + '/data/individual_projects/0' + String(i);
		var img_dir = dir + '/img';
		if (!fs.existsSync(dir)){
    	fs.mkdirSync(dir);
			fs.mkdirSync(img_dir);
			fs.writeFileSync(dir + '/data.json', JSON.stringify(proj_array[i]));
		}
	}
}
