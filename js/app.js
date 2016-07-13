$('.icon-menu').click(function() {
  $('#primary-nav').slideToggle('slow');
});

function Section (opts) {
  this.name = opts.name;
  this.title = opts.title;
  this.body = opts.body;
}

Section.prototype.toHtml = function() {
  var $newSection = $('section.template').clone();
  $newSection.addClass(this.name);
  $newSection.find('div').addClass(this.name + '-content');
  if(this.title) {
    $newSection.find('h1').text(this.title);
  } else {
    $newSection.find('h1').remove();
  }
};
