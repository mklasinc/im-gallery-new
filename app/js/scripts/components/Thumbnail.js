function Thumbnail(project){

    //project data
    // this._img_url = 'img/' + project.img[0];
    this._img_url = "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
    this._link = project.website_url;
    this._name = project.project_name;
    this._author = project.project_author;
    this._tagline = project.descr_short;
    this._semester = project.tags.semester;
    this._class = project.tags.course;

    // collection of category keys and category values
    //for each category, attach a data property to the metadata string (to be appended to the html string)
    var tag_keys = Object.keys(project.tags);
    var tag_values = Object.values(project.tags);
    var metadata_string = '';
    tag_keys.forEach(function(e,i){
        metadata_string += 'data-' + e + '="' + tag_values[i] + '" ';
    });

  //create HTML elements
    var htmlString = '';
    htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ' + metadata_string + ' >';
    htmlString += '<div class="overlay-container"> ';
    htmlString += '<div class="overlay-image-container"><img class="img-responsive" src="' + this._img_url + '" alt=""></div>';
    htmlString += '<div class="overlay-container::after"><div class="title-line"><strong>' + this._name + '</strong>  <span class="title-line-author"><br>by ' + this._author + '</span></div>';
    htmlString += '<div class="meta-line">' + this._semester + '</div></div>';
    htmlString += '<div class="overlay-box">';
    htmlString += '<a class="overlay-text" href="' + this._link + '" target="_blank">VIEW</a> <div class="overlay-project-name">';
    htmlString += '<p class="font-title">' + this._name + '</p>' ;
    htmlString += '<p>by ' + this._author + '</p> </div>';
    htmlString += '<div class="overlay-project-description">' + this._tagline + '</div>';
    //htmlString += '<div class="overlay-project-tags">' + project.hashtag + '</div>';
    htmlString += '</div> </div>';

    $(htmlString).appendTo('.row');

};

//utility method for filtering data
Thumbnail.filter = function(filterCategory,filterName){

    $grid.isotope({
        filter: function() {
            //read the data for the target category appended to thumbnail items previously. $(this) refers to the thumbnail item (.thumb)
            var classFilter = $(this).data(filterCategory).toLowerCase();
            //in case the data value for a specific category is an array, split it into an array of values
            var dataArray = classFilter.split(",");
            //display a thumbnail item if it's metadata contains a tag value that matches the filter tag
            for(var i = 0; i < dataArray.length; i++){
              if(dataArray[i] == filterName){
                return dataArray[i] == filterName; // return true to show, false to hide
            };

          };
        }
    });

};


//DEPRECATED
    /*tag_keys.forEach(function(e,i){
        if(typeof e !== "object"){
            metadata_string += 'data-' + e + '="' + tag_values[i] + '" ';
        }else{
            metadata_string += 'data-';
            for(var j = 0; j < tag_values[i].length; j++){
                console.log('this is an array value',tag_values[i][j]);
                metadata_string += tag_values[i][j];
                if(j < project.custom.length - 1){
                    metadata_string += ' ';
                }
            }
        }

    });*/
