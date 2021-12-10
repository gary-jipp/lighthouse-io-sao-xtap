

const createAppElement = function() {

  return $("<div>Hello JQuery World</div>");

};

$(function() {

  $("#root").append(createAppElement());

});

