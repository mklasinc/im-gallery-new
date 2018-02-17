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
		var prev_active_tag;
		var active_tag;
		var active_ctg;

		$('.tags').click(function(e){
			active_tag = $(e.target).attr("id").split('-')[1];
			if(prev_active_tag === active_tag){
				console.log('close down the tag!'); // it works, take it from there
			};
			prev_active_tag = active_tag;	
			//find the category corresponding to the tag, so you can call the thumbnail filter
			for(var ctg in tag_object){
				var ctg_class = "tag-" + ctg;
				if($(e.target).hasClass(ctg_class)){
					active_ctg = ctg;
				};
			};
			prev_active_button = current_active_button;

			//make the clicked object appear active
			$(prev_active_button).removeClass("is-active").addClass("not-active").find('.x-icon').addClass('hidden');
        	$(current_active_button).removeClass("not-active").addClass("is-active").find('.x-icon').removeClass('hidden');
        	//apply filter to the thumbnail grid
        	Thumbnail.filter(active_ctg,active_tag);
		});
	};
	
};