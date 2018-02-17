var my_data = {

  load_data_from_index: function(index_file_path){
    $.getJSON(index_file_path,function(data){
        if(Array.isArray(data)){
          data.forEach(function(el,id){
            var project_data_path = '../../data/projects_new/' + el.folder_name + '/data.json';
            (function(){
              var create_categ_bar = id === data.length - 1 ? true : false;
              $.getJSON(project_data_path,function(d){
                my_data.populate_category_bar(d);
                if(create_categ_bar){my_data.create_category_bar(new_categ_object)};
              })
            })();
          });
        };
      });
    },

    populate_category_bar: function(proj){

          var trim_string = function(str){
            return str.toLowerCase().trim();
          };

          var push_to_array = function(arr,el){
            if(arr.indexOf(el) === -1){
              arr.push(el);
            }
          }
          //if there is no existing category, make a category AND push the corresponding values to it
          //if the category already exists, check if the tag exists
          for (var key in proj.tags) {

            var tag_value = proj.tags[key];
            if(new_categ_object.hasOwnProperty(key) === false){
              new_categ_object[key] = [];
            };

            if(tag_value && typeof tag_value === 'string'){
              push_to_array(new_categ_object[key],trim_string(tag_value));
            }else if(tag_value && Array.isArray(tag_value)){
              tag_value.forEach(function(tag_el){
                push_to_array(new_categ_object[key],trim_string(tag_el));
              });
            }
          }
    },

    create_category_bar: function(obj){
      new CategoryBar(obj);
      new TagBar(obj);
    }

  // load_data: function(data_path){
  //
  //   $.getJSON(data_path,function(data){
  //
  //     data.forEach(function(el){
  //       var keys_array = Object.keys(el.tags); //get all the tag keys(i.e. categories) inside the object
  //       var values_array = Object.values(el.tags); // get all tag values (i.e. tags)
  //       var tag_obj = {}; // create empty tag object, populated later
  //       var obj = el.tags;
  //
  //
  //       for (var key in el.tags) {
  //         //if there is no categ, make a category AND push the corresponding values to it
  //         //if the category already exists, check if the tag exists
  //         var value = el.tags[key];
  //
  //         if(!new_categ_object.hasOwnProperty(key)){
  //           new_categ_object[key] = [];
  //         };
  //
  //         if(value && typeof value === 'string'){
  //           var clean_string = value.toLowerCase().trim();
  //           if(new_categ_object[key].indexOf(clean_string) === -1){
  //             new_categ_object[key].push(clean_string);
  //           }
  //         }else if(Array.isArray(value)){
  //           for(var i = 0; i < value.length; i++){
  //             var clean_string = value[i].toLowerCase().trim();
  //             if(new_categ_object[key].indexOf(clean_string) === -1){
  //               new_categ_object[key].push(clean_string);
  //             };
  //           }
  //         }
  //       }
  //
  //     }); //  end of data for each
  //
  //     console.log(new_categ_object);
  //     test_category_bar = new CategoryBar(new_categ_object);
  //     new TagBar(new_categ_object);
  //   }); //end of getJSON
  //
  // }

};
