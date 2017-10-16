function CategoryBar(tag_object){
	var ctg_array = [];
	this.array = ctg_array;
	create_ctg_group();

	function create_ctg_group(){
		for(var ctg in tag_object){
			ctg_array.push(new CategoryButton(ctg));
	    	//ctgObj.createDomElement();
		};
		console.log('this is our ctg array',ctg_array);
		create_ctg_buttons();
	};

	function create_ctg_buttons(){
		for(var i = 0; i < ctg_array.length; i++){
			ctg_array[i].createDomElement();
		};
		ctg_bar_click_handler();
	}

	function ctg_bar_click_handler(){
		var current_active_button;
		var prev_active_button;
		var active_ctg;

		$('.ctg').click(function(e){
			active_ctg = $(e.target).attr("id").split('-')[1];
			console.log(active_ctg);
			prev_active_button = current_active_button;
			current_active_button = $(e.target);
			$(prev_active_button).removeClass("is-active").addClass("not-active");
			$(".tags").addClass("not-visible");
			//make the clicked object appear active
        	$(current_active_button).removeClass("not-active").addClass("is-active");
        	$(".tag-" + active_ctg).removeClass("not-visible").addClass("is-visible");
		});
	}

}