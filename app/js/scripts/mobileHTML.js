function createMobileHTML(jsonObj){

  var imageString = '';
  
  imageString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ';
  imageString += 'data-class="' + jsonObj.course.toLowerCase() + '" ';
  imageString += 'data-tech="' + jsonObj.tech.toLowerCase() + '" ';
  imageString += 'data-custom="';
  for(var j = 0; j < jsonObj.custom.length; j++){
    imageString += jsonObj.custom[j];
    if(j < jsonObj.custom.length - 1){
      imageString += ' ';
    }
  };
  imageString += '" data-index="' + jsonObj.index + '">';
  imageString += '<div class="mobile-container">';
  imageString += '<img class="img-responsive" src="' + jsonObj.img_url + '" alt="">';
  imageString += '</div></div>'; 

  $(imageString).appendTo('.row');



  var htmlString = '';
  htmlString += '<div class="full-screen-overlay hidden" data-index="' + jsonObj.index + '"><img src="img/myX.png" class="mobile-back-button">';
  htmlString += '<img class="mobile-image" src="' + jsonObj.img_url + '" alt="">';
  htmlString += '<div class="mobile-proj-name">';
  htmlString += '<p class="mobile-proj-title">' + jsonObj.name + '</p>';
  htmlString += '<p class="mobile-proj-authors">' + jsonObj.author + '</p></div>'; 
  htmlString += '<div class="mobile-proj-description">' + jsonObj.description + '</div>';
  htmlString += '<a class="mobile-view" href="' + jsonObj.link + '" target="_blank">VIEW</a>';
  htmlString += '</div>';
  //htmlString += '<div class="mobile-proj-tags">' + jsonObj.hashtag + '</div></div>';
  //console.log(htmlString);
  $('#overlays').append(htmlString);

  var imageDataIndex = '.thumb[data-index="' + jsonObj.index + '"]';
  var overlayDataIndex = '.full-screen-overlay[data-index="' + jsonObj.index + '"]';

  $(imageDataIndex).click(function(){
    console.log($(this).data('index'));
    console.log($(overlayDataIndex).data('index'));
    $(overlayDataIndex).removeClass('hidden');

  });

  $('.mobile-back-button').click(function(){
    console.log("we've registered a click!");
    $(this).parent().addClass('hidden');
  });
};
