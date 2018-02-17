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
// var data_path = '../data/project_data_all.json';
var index_path = '../../data/projects_new/index.json';



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
  // console.log('hey there');
  // my_load.load_data(data_path);
  my_data.load_data_from_index(index_path);

  // $.getJSON(data_path,function(data){
  //   console.log('we have projects data');
  //   data.forEach(function(el){
  //     new Thumbnail(el);
  //   });
  //   createGrid();
  //   //console.log('hello hello');
  // });

  // loadData();
  // load.load_data(data_path);


});
