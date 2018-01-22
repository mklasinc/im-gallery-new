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
var test_category_bar;

var data_path = '../data/project_data_all.json';

function loadData(){

  $.getJSON(data_path,function(data){

    data.forEach(function(el){
      var keys_array = Object.keys(el.tags); //get all the tag keys(i.e. categories) inside the object
      var values_array = Object.values(el.tags); // get all tag values (i.e. tags)
      var tag_obj = {}; // create empty tag object, populated later
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
    test_category_bar = new CategoryBar(new_categ_object);
    new TagBar(new_categ_object);
  }); //end of getJSON

}

//when you want to show all projects
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
      category:'[data-class]',
      semester: function( itemElem) { // function
        var semester = $( itemElem ).data('semester');
        var num = 0;
        //console.log(semester);
        var arr = semester.split(" ");
        var year = isNaN(parseInt(arr[1]*3)) ? 0 : parseInt(arr[1]*3);

        //console.log(year);
        num += year;
        if(arr[0].toLowerCase() === 'fall'){
          num += 2;
        }else if(arr[0].toLowerCase() === 'spring'){
          num += 1;
        }else{
          num += 0;
        };
        return num
      }
    },
    sortBy: 'semester',
    sortAscending: false
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

  $.getJSON(data_path,function(data){
    console.log('we have projects data');
    data.forEach(function(el){
      new Thumbnail(el);
    });
    createGrid();
    //console.log('hello hello');
  });

  loadData();

});
