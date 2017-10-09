// CATEGORY CLASS
  function Category(selector){
    this.ctg = selector;
    //method to capitalize first letter of category name - used in createDomElement method
    this.capitalizeFirstLetter = function(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    };  
    //DOM element method
    this.createDomElement = function(){
      //create HTML string
      var htmlString = '';
      htmlString += '<li><a class="ctg pink-hover"';
      htmlString += 'id=filter-' + this.ctg + '>' + this.capitalizeFirstLetter(this.ctg) + '</a></li>'; 
      //make a variable that stores the whole object, so events can be bound to the object
      var curObj = this;
      //append the object to '#filters' container
      curObj.element = $(htmlString).prependTo('#filters');
      //bind events
      curObj.element.click(function(e){
        //on click get obj id
        var objID = $(e.target).attr("id");
        //bring all tag and category objects to default state
        $(".ctg").removeClass("toggle-click").addClass("pink-hover");
        $(".tags").addClass("hidden");
        //make the clicked object appear active
        $(e.target).toggleClass("pink-hover toggle-click");
        $(".tag-" + curObj.ctg).removeClass("hidden");
      });
    };
    //push all the objects into an array******
    categObjArray.push(this);
  };