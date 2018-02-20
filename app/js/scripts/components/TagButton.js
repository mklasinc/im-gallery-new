//tag object class
function TagButton(category,selector){
  console.log('called',selector);
    //every tag object has category and tag property
    this.ctg = category;
    this.tag = selector;
    //push the object to tagArray - used in***
    tagObjArray.push(this);
    //method to capitalize first letter of tag name - used in createDomElement method
    this.capitalizeFirstLetter = function(string){
      var newString = string.replace(/-/g," ");
      return newString.charAt(0).toUpperCase() + newString.slice(1);
    };

    //method to create DOM element
    this.createDomElement = function(){
      //create HTML string
      var htmlString = '';
      htmlString += '<li class="tags tag-' + this.ctg + ' not-visible" ';
      htmlString += 'id="filter-' + this.tag + '">' + this.tag;
      htmlString += '<img src="img/myX.png" class="x-icon hidden"></li>';
      //prepare for event binding
      var curObj = this;
      //append to DOM, the elements sit in the '#tags-bar container', by default toggle boolean is false
      curObj.element = $(htmlString).data("toggleBool",false).prependTo('#active-tags-bar');
      // curObj.element = $(htmlString).data("toggleBool",false).prependTo('#sort-bar::after');

    };
};

// DEPRECATED
//bind events to the element
/*curObj.element.click(function(e){
  //get the target****
  var target = $(e.target);
  var parent = target.parent();

  //if someone clicks the 'x' next to the tag name, the parent container (i.e. #tags-bar) becomes the target
  if(target.is("img")){
    target = parent;
  };

  //if tag is not active
  if(target.data("toggleBool") == false){
    //filter data
    applyFilter(curObj.ctg, curObj.tag);
    //set toggle bools of all other tag objects to false
    for (var i = 0; i < tagArray.length; i++) {
      var tagID = '#filter-' + tagArray[i].tag;
      $(tagID).data("toggleBool",false);
    };
    //set toggle bool of the active object to true
    target.data("toggleBool",true);

  //if tag is active
  }else if(target.data("toggleBool") == true){
    //reset the filter
    applyNoFilter(curObj.tag);
    //set toggle value to false
    target.data("toggleBool",false);
  }
});*/
