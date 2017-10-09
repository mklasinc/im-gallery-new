function CategoryBar(tag_object){

	for(var ctg in tag_object){
		console.log(ctg);
		var ctgObj = new Category(ctg);
    	ctgObj.createDomElement();
	};

}