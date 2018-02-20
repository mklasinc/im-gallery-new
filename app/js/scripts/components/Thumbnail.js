function Thumbnail(project){

    //project data
    // let project = d;
    // project.
    // project.images[0] = project.images[0] || "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
    // this._img_url = 'img/' + project.img[0];
    project.images[0] = "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
      // this._img_url = "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
      // this._link = project.website_url;
      // this._title = project.project_name;
      // this._author = project.authors;
      // this._tagline = project.description.short;
      // this._short_descr = project.description.short;
      // this._semester = project.tags.semester;
      // this._class = project.tags.course;

    function create_metadata_string(tag_obj){
      var tag_keys = Object.keys(tag_obj);
      var tag_values = Object.values(tag_obj);
      var string = '';
      tag_keys.forEach(function(e,i){
          string += 'data-' + e + '="' + tag_values[i] + '" ';
      });
      return string;
    }

    function create_image_element(src){
      var $img = $('<img class="img-responsive" src="'+ src +'" alt=""/>');

      $img.on('load', function(e){
          console.log("great");
      }).on('error', function(e) {
        console.log("not found!");
          $img = $('<img class="img-responsive" src="http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg" alt=""/>');
      });
      return $img;
    };

  //create HTML elements
  function create_html_element(){
    var htmlString = '';
    htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ' + metadata_string + ' >';
    htmlString += '<div class="overlay-container"> ';
    htmlString += '<div class="overlay-image-container"><img class="img-responsive" src="' + project.images[0] + '" alt=""/></div>';
    // htmlString += '<div class="overlay-image-container">'+ create_image_element(project.images[0]) + '</div>';
    htmlString += '<div class="overlay-container::after"><div class="title-line"><strong>' + project.title + '</strong>  <span class="title-line-author"><br>by ' + project.authors + '</span></div>';
    htmlString += '<div class="meta-line">' + project.tags.semester + '</div></div>';
    htmlString += '</div> </div>';

    var $my_el = $(htmlString).appendTo('#gallery-container');
    create_click_handler($my_el,project);
  }

  function create_click_handler($el,project){
    // $el = $(html_s);
    $el.click(function(e){
      console.log("clicked!");
      console.log(project);

      new Popup(project);
    })
  }

  var metadata_string = create_metadata_string(project.tags);
  create_html_element();


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
