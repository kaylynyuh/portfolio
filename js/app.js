$('.icon-menu').click(function() {
  $('#primary-nav').slideToggle('slow');
});

var sectionsArray = [];

function Section (opts) {
  this.name = opts.name;
  this.title = opts.title;
  this.body = opts.body;
}

Section.prototype.toHtml = function() {
  var source = $('#section-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

sections.forEach(function(sectionObj) {
  sectionsArray.push(new Section(sectionObj));
});

sectionsArray.forEach(function(generateNewSections) {
  $('main').append(generateNewSections.toHtml());
});

$(function() {
  $('.navItem').on('click', function() {
    var sectionIdentifier = $(this).data('section');
    var windowWidth = $(window).width();
    if (windowWidth > 760) {
      var pos = $('section[class="' + sectionIdentifier + '"]').offset();
      $('body').animate({ scrollTop: pos.top }, 50);
    } else {
      $('section[class="' + sectionIdentifier + '"]').show();
      $('section[class!="' + sectionIdentifier + '"]').hide();
      if(sectionIdentifier === 'about') {
        $('section.name').show();
      }
    }
  });
});
