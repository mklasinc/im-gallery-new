function TagBar(tag_object){
	create_tag_buttons();

	function create_tag_buttons(){
		for(var ctg in tag_object){

			tag_object[ctg].forEach(function(e){
				var tagButton = new TagButton(ctg,e);
	    		tagButton.createDomElement();
			});
			/*var ctgObj = new Category(ctg);
	    	ctgObj.createDomElement();*/
		};
		tag_bar_click_handler();
	}



	function tag_bar_click_handler(){

		var current_active_button;
		var prev_active_button;
		var active_tag;
		var active_ctg;

		$('.tags').click(function(e){
			active_tag = $(e.target).attr("id").split('-')[1];
			active_ctg;
			console.log('the active tag is: ',active_tag);
			for(var ctg in tag_object){
				var ctg_class = "tag-" + ctg;
				if($(e.target).hasClass(ctg_class)){
					//console.log('yes, we now what category the current tag belongs to! Its this category: ',ctg);
					active_ctg = ctg;
				};
			};
			prev_active_button = current_active_button;
			current_active_button = $(e.target);
			$(prev_active_button).removeClass("is-active").addClass("not-active").find('.x-icon').addClass('hidden');
			//make the clicked object appear active
        	$(current_active_button).removeClass("not-active").addClass("is-active").find('.x-icon').removeClass('hidden');

        	Thumbnail.filter(active_ctg,active_tag);
		});
	};

	/*for(var i = 0; i < tagObjArray.length; i++){
    var tagObj = new Tag(tagObjArray[i].ctg,tagObjArray[i].tag);
    tagObj.createDomElement();*/

	
};