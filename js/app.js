$('.icon-menu').click(function() {
  $('#primary-nav').slideToggle('slow');
});

// var $sectionContent = $('section').text();
// $('section').append($sectionContent);
//
// $('section').html(function() {
//   return $(this).text();
// });
// var entries = [];
//
// function updateSection(title, image, content) {
//   this.title = title;
//   this.image = 'img/' + image;
//   this.content = content;
//   entries.push(this);
//   loadContent();
// }
//
// var about = new updateSection('', '', 'Hello! My name is Kaylyn Yuh and I\'m a Seattle based software engineer. I\'m just a pluviophile who likes to write code, explore the outdoors, and drink coffee. I take my coffee black and Fall is my favorite time of the year. I am experienced with HTML, CSS, JavaScript, jQuery, and Git.');
//
// var work = new updateSection('Work', '', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
//
// function loadContent () {
//   for(var i = 0; i < entries.length; i ++) {
//     var main = $('main');
//     var section = $('<section></section>');
//     var headerOne = $('<h1>' + entries[i].title + '</h1>');
//     var div = $('<div></div>');
//     var paragraph = $('<p></p>');
//     div.append(headerOne);
//     div.append(paragraph);
//     section.append(div);
//     main.append(section);
//   }
// }
