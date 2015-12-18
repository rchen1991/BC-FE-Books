(function() {

  var template = _.template('<div class="card">' + 
    '<div class="cardImage"></div>' +
    '<div class="content">' + 
      '<div class="cardTop"><h4 class="title"><%= title %></h4><h5 class="author">by <%= author %></h5></div>' + 
      '<div class="cardActions">' + 
      '<input type="button" value="FREE SAMPLE" class="secondary actionButton"><input type="button" value="REVIEW" class="primary actionButton">' +
    '</div></div></div>');

  BookApp.createCard = function (author, title) {
    var str = template({
      title: title,
      author: author
    });
    return $(str).get(0);
  }
})();
