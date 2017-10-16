//console.log('thumbnail class is loaded!');
function Thumbnail(project){
    var img_folder_path = 'img';
    this._img_url = 'img/' + project.img[0];
    this._link = project.website_url;
    this._name = project.project_name;
    this._author = project.project_author;
    this._tagline = project.descr_short;
    this._semester = project.tags.semester;
    this._class = project.tags.course;
    //console.log('new thumbnail created!');
    var tag_keys = Object.keys(project.tags);
    var tag_values = Object.values(project.tags);
    
    var metadata_string = '';

    //for each category
    tag_keys.forEach(function(e,i){
        if(typeof e !== "object"){
            metadata_string += 'data-' + e + '="' + tag_values[i] + '" ';
        }else{
            metadata_string += 'data-';
            for(var j = 0; j < tag_values[i].length; j++){
                metadata_string += tag_values[i][j];
                if(j < project.custom.length - 1){
                    metadata_string += ' ';
                }
            }
        }
        
    });
    //console.log(metadata_string);
/*
    var htmlString = '';
    htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ';
    htmlString += 'data-class="' + jsonObj.course.toLowerCase() + '" ';
    htmlString += 'data-tech="' + jsonObj.tech.toLowerCase() + '" ';
    htmlString += 'data-custom="';
    for(var j = 0; j < jsonObj.custom.length; j++){
      htmlString += jsonObj.custom[j];
      if(j < jsonObj.custom.length - 1){
        htmlString += ' ';
      }
    };
    htmlString += '">';
    */
    //console.log(metadata_string);
    

  //create HTML elements
    var htmlString = '';
    htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ' + metadata_string + ' >';
    htmlString += '<div class="overlay-container"> ';
    htmlString += '<img class="img-responsive" src="' + this._img_url + '" alt="">';
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
    console.log('filtering images!');
    $grid.isotope({
        filter: function() {
          // _this_ is the item element. Get text of element's .number
            console.log('the filter category is:', filterCategory);
            console.log('the filter tag is: ',filterName);
            var classFilter = $(this).data(filterCategory).toLowerCase();
            console.log('the class filter is: ' + classFilter);
            var dataArray = classFilter.split(",");
            for(var i = 0; i < dataArray.length; i++){
              if(dataArray[i] == filterName){
                console.log('we have a match! filter: ',filterName);
                return dataArray[i] == filterName;

            };
            
          };
          //console.log(classFilter);
          // return true to show, false to hide
          
        }
    });
};