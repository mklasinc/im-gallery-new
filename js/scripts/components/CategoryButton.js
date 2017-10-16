// CATEGORY CLASS
  function CategoryButton(selector){
    this.ctg = selector;
    //method to capitalize first letter of category name - used in createDomElement method
    this.capitalizeFirstLetter = function(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    };  
    //DOM element method
    this.createDomElement = function(){
      //create HTML string
      var htmlString = '';
      htmlString += '<li><a class="ctg not-active"';
      htmlString += 'id=filter-' + this.ctg + '>' + this.capitalizeFirstLetter(this.ctg) + '</a></li>'; 
      $(htmlString).prependTo('#filters');
    };
    //push all the objects into an array******
    categObjArray.push(this);
  };