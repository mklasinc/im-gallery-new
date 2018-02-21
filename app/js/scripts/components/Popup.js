// function
function Popup(project,index){

  console.log("new popup!");

  var create_html_element = function(d){

    var first_img = 'data/projects/' + index.folder_name + '/img/' + index.img[0];

    var html_string = '';
    html_string += '<div class="popup-window">';
    html_string += '<img class="popup-window__exit-button" src="img/x-icon-black.png" />';
    html_string += '<section><h1 class="popup-window__title">' + d.title+ '</h1>';
    html_string += '<p class="popup-window__description--short">' + d.description.short + '</p></section>';
    html_string += '<img class="popup-window__image--main" src="' + first_img + '" />';
    html_string += '<section><p class="popup-window__description--long">' + 'Lorem ipsum' + '</p></section>';
    html_string += '</div>';

    console.log("apppending html string!");
    $('#popup-wrapper').css("display","block");
    $('#popup-wrapper').html(html_string);
  };

  var enable_window_scrolling = function(scrolling_bool){
    if(scrolling_bool){
      $('body').removeClass("js-prevent-scrolling");
    }else{
      $('body').addClass("js-prevent-scrolling");
    }
  }

  var exit_button_click_handler = function(button,wrapper){
      $(button).click(function(){
        $(wrapper).css("display","none");
        enable_window_scrolling(true);
    });
  }

  let $popup_wrapper = '#popup-wrapper';
  let $exit_button = '.popup-window__exit-button';
  create_html_element(project,$popup_wrapper);
  exit_button_click_handler($exit_button,$popup_wrapper);
  enable_window_scrolling(false);

}
