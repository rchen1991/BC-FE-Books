// Namespace my book app
var BookApp = {};

window.onload = function() {
  BookApp.init();
};

//Global "database"

var books = [
  {
    author: 'Alex Nelson',
    title: 'El Pooch'
  },
  {
    author: 'Scott Masterson',
    title: 'The Flight'
  }
];

var bookChecker = {
  'Ryan Chen How are you?': true
};


(function() {

  //Helper Functions
  var createEle = function(type) {
    return document.createElement(type);
  }

  //Application Functions
  //Menu Button Logic
  var menuButton = function () {
    var image = document.getElementById('menuButton');
    var books = document.getElementById('books');
    var mask = document.getElementById('mask')
    var title = createEle('span');
    var close = true;
    image.addEventListener('click', function () {
      if (close) {
        $(books).slideDown();
        mask.setAttribute('class', 'show');
        image.setAttribute('src', '../icons/ic_close_24px.svg');
        close = false;
      } else {
        $(books).slideUp();
        mask.setAttribute('class', '');
        image.setAttribute('src', '../icons/ic_menu_24px.svg');
        close = true;
      }
    })
    image.setAttribute('src', '../icons/ic_menu_24px.svg');

    // title.innerHTML = 'My Books';

    // image.appendChild(newImg);
    // image.appendChild(title);

  }

  //User entered data for Book
  var inputForm = function () {
    var inputForm = document.getElementById('inputForm');
    var welcome = document.getElementById('welcome');
    var yes = document.getElementById('yesButton');
    var no = document.getElementById('noButton');
    //Yes/No Event handler
    yes.addEventListener('click', function (e) {
      $('#inputForm').slideDown();
    });

    no.addEventListener('click', function (e) {
      $('#inputForm').slideUp();
    })

    inputForm.addEventListener('submit', addData);
  }

  //add User inputted data to be displayed on application
  var addData = function (e) {
    e.preventDefault();
    var userTitle = e.target.title.value;
    var userAuthor = e.target.author.value;
    var isDuplicate = false;
    

    //Add into storage
    //check to see if title is already there
    var authorTitle = userAuthor + userTitle;
    if(bookChecker[authorTitle] === true) {
      console.log('Book already exists');
      isDuplicate = true;
    }

    if (!isDuplicate) {
      books.push({author: userAuthor, title: userTitle});
      bookChecker[authorTitle] = true;
      renderCard(userAuthor, userTitle); 
      renderList(userTitle);
    }
    var JSONFormat = JSON.stringify(books);
  }

  var renderCard = function (author, title) {
    var wrapper = document.getElementById('wrapper');
    var card = BookApp.createCard(author, title);

    wrapper.appendChild(card);
  }

  var renderList = function (title) {
    var bookList = document.getElementById('books');
    var list = createEle('li')
    list.innerHTML = title;

    bookList.appendChild(list);

  }


  // BookApp 
  BookApp.init = function() {
    menuButton();
    inputForm();

    books.forEach(function(book, index) {
       renderCard(book.author, book.title);
       renderList(book.title);
    })
  };
})();

