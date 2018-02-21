function Thumbnail(project,index){

    // console.log(index);
    //project data
    // let project = d;
    // project.
    // project.images[0] = project.images[0] || "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
    // this._img_url = 'img/' + project.img[0];
    // project.images[0] = "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
      // this._img_url = "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
      // this._link = project.website_url;
      // this._title = project.project_name;
      // this._author = project.authors;
      // this._tagline = project.description.short;
      // this._short_descr = project.description.short;
      // this._semester = project.tags.semester;
      // this._class = project.tags.course;
      // var imgcheck = project.images[0].width;
      //
      // if (imgcheck==0) {
      //   // alert("You have a zero size image");
      //   console.log("zero sized image");
      // } else {
      //   //execute the rest of code here
      //   console.log("hey noooooooo!!");
      // }
      //


    function create_metadata_string(tag_obj){
      var tag_keys = Object.keys(tag_obj);
      var tag_values = Object.values(tag_obj);
      var string = '';
      tag_keys.forEach(function(e,i){
          string += 'data-' + e + '="' + tag_values[i] + '" ';
      });
      return string;
    }

    // function create_image_element(src){
    //   var $img = $('<img class="img-responsive" src="'+ src +'" alt=""/>');
    //
    //   $img.on('load', function(e){
    //       console.log("great");
    //   }).on('error', function(e) {
    //     console.log("not found!");
    //       $img = $('<img class="img-responsive" src="http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg" alt=""/>');
    //   });
    //   return $img;
    // };

  //create HTML elements
  function create_html_element(metadata){
    console.log(index);
    var thumbnail_img = 'data/projects/' + index.folder_name + '/img/' + index.img[0];
    // project.images[0] = "http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg";
    var htmlString = '';
    htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ' + metadata + ' >';
    htmlString += '<div class="overlay-container"> ';
    htmlString += '<div class="overlay-image-container"><img class="img-responsive" src=' + thumbnail_img + ' alt=""/></div>';
    // htmlString += '<div class="overlay-image-container">'+ create_image_element(project.images[0]) + '</div>';
    htmlString += '<div class="overlay-container::after"><div class="title-line"><strong>' + project.title + '</strong>  <span class="title-line-author"><br>by ' + project.authors + '</span></div>';
    htmlString += '<div class="meta-line">' + project.tags.semester + '</div></div>';
    htmlString += '</div> </div>';

    var $my_el = $(htmlString).appendTo('#gallery-container');
    // $my_el.children('img-responsive').css();
    create_click_handler($my_el,project);
  }

  function create_click_handler($el,project){
    // $el = $(html_s);
    $el.click(function(e){
      console.log("clicked!");
      console.log(project);

      new Popup(project,index);
    })
  }

  // var check_if_image_exists = function(project_folder,img_title){
  //   var img_path = 'data/projects/' + project_folder + '/img/' + img_title;
  //   $.ajax({
  //       url:img_path,
  //       type:'HEAD',
  //       error: function(){
  //               //do something depressing
  //               create_html_element(metadata_string,null);
  //       },
  //       success: function(){
  //               //do something cheerful :)
  //               // var thumbnail_img = project.images[0];
  //               console.log("it does exist!");
  //               // create_html_element(metadata_string,thumbnail_img);
  //               create_html_element(metadata_string,img_path);
  //       }
  //
  //   });
  //
  // }

  var metadata_string = create_metadata_string(project.tags);
  create_html_element(metadata_string);
  // check_if_image_exists(index.folder_name,index.img[0]);
  // create_html_element(metadata_string,'data/projects/consciousness/img/01.png');




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
