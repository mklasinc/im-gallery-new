function TagBar(tag_object){


	for(var ctg in tag_object){

		tag_object[ctg].forEach(function(e){
			var tagButton = new TagButton(ctg,e);
    		tagButton.createDomElement();
		})
		/*var ctgObj = new Category(ctg);
    	ctgObj.createDomElement();*/

	};

	  /*for(var i = 0; i < tagObjArray.length; i++){
    var tagObj = new Tag(tagObjArray[i].ctg,tagObjArray[i].tag);
    tagObj.createDomElement();*/

	
}