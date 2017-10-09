//all the arrays
var categTagList = ["mashups","other","digital","physical","health","data-visualization","music"];
var categList = ["class","custom","tech"];
var tagObjArray = [];
var categObjArray = [];
var $grid;
var new_categ_list = [];
var new_categ_object = {};
var new_tag_list = [];
var new_obj_array = [];

var data_path = '../data/old_projects_data.json';

function loadData(){

  $.getJSON(data_path,function(data){

    data.forEach(function(el){
      var keys_array = Object.keys(el.tags); //get all the tag keys(i.e. categories) inside the object
      var values_array = Object.values(el.tags); // get all tag values (i.e. tags)
      var tag_obj = {}; // create empty tag object, populated later
      //var tag_obj.tag = []; // make the property 
      var obj = el.tags;


      for (var key in el.tags) {
        //if there is no categ, make a category AND push the corresponding values to it
        //if the category already exists, check if the tag exists
        var value = el.tags[key];

        if(!new_categ_object.hasOwnProperty(key)){
          new_categ_object[key] = [];
        };

        if(value && typeof value === 'string'){
          var clean_string = value.toLowerCase().trim();
          if(new_categ_object[key].indexOf(clean_string) === -1){
            new_categ_object[key].push(clean_string);
          }
        }else if(Array.isArray(value)){
          for(var i = 0; i < value.length; i++){
            var clean_string = value[i].toLowerCase().trim();
            if(new_categ_object[key].indexOf(clean_string) === -1){
              new_categ_object[key].push(clean_string);
            };
          }
        }
      }

    }); //  end of data for each

    console.log(new_categ_object);
    new CategoryBar(new_categ_object);
    new TagBar(new_categ_object);
  }); //end of getJSON
  
}


var tagObjArray = [
  {
    ctg: "class",
    tag: "mashups"
  },
  {
    ctg: "class",
    tag: "other"
  },
    {
    ctg: "tech",
    tag: "digital"
  },
    {
    ctg: "tech",
    tag: "physical"
  },
    {
    ctg: "custom",
    tag: "health"
  },
    {
    ctg: "custom",
    tag: "data-visualization"
  },
    {
    ctg: "custom",
    tag: "music"
  }
];

/*$.getJSON("data/tags-data.json", function(data){
  console.log(data);
});*/

var ctgList = [];

function findUniqVals(){
  var i = 0;
  tagObjArray.forEach(function(d){

    if(ctgList[i] !== d.ctg){
      //console.log(d.ctg);
      if(ctgList.length !== 0){
        i++;
      }
      ctgList.push(d.ctg);
    };
    tagObjArray

  });
};

findUniqVals();





/*----------TAG FILTERS------------------*/

function applyFilter(filterCategory, filterName){
  //clear everything
  for(var i = 0; i < categTagList.length; i++){
    var hideSelector = '#filter-' + categTagList[i];
    $(hideSelector).removeClass("toggle-click").find('.x-icon').addClass('hidden');
  };

  //style
  var selector = '#filter-' + filterName;
  $(selector).addClass("toggle-click").find('.x-icon').removeClass('hidden');

  //filter
  $grid.isotope({
    // filter element with numbers greater than 50
    filter: function() {
      // _this_ is the item element. Get text of element's .number
        var classFilter = $(this).data(filterCategory);
        var dataArray = classFilter.split(" ");
        for(var i = 0; i < dataArray.length; i++){
          if(dataArray[i] == filterName){
            return dataArray[i] == filterName;
        };
        
      };
      //console.log(classFilter);
      // return true to show, false to hide
      
    }
  });
};

function cleartagObjArray(){
  for (var i = 0; i < tagObjArray.length; i++) {
    var tagId = '#filter-' + tagObjArray[i].tag;
    //console.log(tagId);
    $(tagId).data("toggleBool", false);
    $(tagId).removeClass("toggle-click").find('.x-icon').addClass('hidden');
  };
}

function clearcategObjArray(){
  for (var i = 0; i < categObjArray.length; i++) {
    //console.log(categObjArray[i].ctg);
    var categId = '#filter-' + categObjArray[i].ctg;
    var tagClass = '.tag-' + categObjArray[i].ctg;
    $(categId).removeClass("toggle-click").addClass("pink-hover");
    $('#tags-bar').find(tagClass).addClass("hidden");
  };
}

//reduce this
function applyNoFilter(filterName){
  var selector = '#filter-' + filterName;
  //console.log(selector);
  $(selector).removeClass("toggle-click").find('.x-icon').addClass('hidden');
  $grid.isotope({
    // filter element with numbers greater than 50
    filter: '*'
  });
};

//method to create a grid with isotope
function createGrid(){
  $grid = $('#isotopeContainer').isotope({
    itemSelector: '.thumb',
    getSortData: {
    category:'[data-class]'
    }
  });

  //load isotope images
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

};

/*----------INITIATE----------*/
/*----------------------------*/
/*----------------------------*/
$(document).ready(function(){
  console.log('hey there');

  $.getJSON('../data/old_projects_data.json',function(data){
    console.log('we have projects data');
    data.forEach(function(el){
      new Thumbnail(el);
    });
    createGrid();
    //console.log('hello hello');
  });

  loadData();



  /*var windowWidth = $(window).width();  
  //method to create HTML elements
  $.getJSON('../data/projects-data.json', function(data){
    // iterate through person objects
    for(var i = 0; i < data.length; i++){
      if(windowWidth < 500){
        createMobileHTML(data[i]);
      }else{
        createHTML(data[i]);
      }
      
    };
    // create an isotope grid
    createGrid();
  });*/
  
  /*
  //method to create category buttons
  for(var i = 0; i < categList.length; i++){
    var ctgObj = new Category(categList[i]);
    ctgObj.createDomElement();
  };

  //method to create tag buttons
  for(var i = 0; i < tagObjArray.length; i++){
    var tagObj = new Tag(tagObjArray[i].ctg,tagObjArray[i].tag);
    tagObj.createDomElement();
  };*/

  /*---------------SORTS--------------------------------------------------*/

  //RANDOM SORT
  /*$('#filter-random').click(function(e){
    //console.log("Yes, we are pressed!");
    $(e.target).css("background-color","pink");

    setTimeout(function(){
      $(e.target).css("background-color","transparent");
      $(e.target).addClass("pink-hover");
    }, 120);

    $grid.isotope({ 
      sortBy : 'random' 
    });
    $grid.isotope('updateSortData').isotope();
  });

  //no sort
  $('#filter-none').click(function(e){

    $(e.target).css("background-color","pink");
    
    setTimeout(function(){
      $(e.target).css("background-color","transparent");
    }, 120);

    cleartagObjArray();
    clearcategObjArray();
    $grid.isotope({
      filter: '*'
    });
  });*/

});