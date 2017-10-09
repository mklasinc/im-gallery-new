//console.log('thumbnail class is loaded!');
function Thumbnail(project){
    var img_folder_path = 'img';
    this._img_url = 'img/' + project.img[0];
    this._link = project.website_url;
    this._name = project.project_name;
    this._author = project.project_author;
    this._tagline = project.descr_short;
    //console.log('new thumbnail created!');
    var tag_keys = Object.keys(project.tags);
    var tag_values = Object.values(project.tags);
    
    var metadata_string = '';

    tag_keys.forEach(function(e,i){
        if(typeof e !== "object"){
            metadata_string += 'data-' + e + '="' + tag_values[i] + '" ';
        }else{
            metadata_string += 'data-';
            for(var j = 0; j < tag_values[i].length; j++){
                metadata_string += tag_values[i][j];
                if(j < project.custom.length - 1){
                    htmlString += ' ';
                }
            }
        }
    });
    //console.log(metadata_string);
    

  //create HTML elements
    var htmlString = '';
    htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" >';
    htmlString += '<div class="overlay-container"> ';
    htmlString += '<img class="img-responsive" src="' + this._img_url + '" alt="">'; 
    htmlString += '<div class="overlay-box">';
    htmlString += '<a class="overlay-text" href="' + this._link + '" target="_blank">VIEW</a> <div class="overlay-project-name">';
    htmlString += '<p class="font-title">' + this._name + '</p>' ;
    htmlString += '<p>by ' + this._author + '</p> </div>';
    htmlString += '<div class="overlay-project-description">' + this._tagline + '</div>';
    //htmlString += '<div class="overlay-project-tags">' + project.hashtag + '</div>';
    htmlString += '</div> </div>';

    $(htmlString).appendTo('.row');

};