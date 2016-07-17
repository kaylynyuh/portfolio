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


// Hide the extra content initially
$('.read-more-content').addClass('hide')

// Set up a link to expand the hidden content:
.before('<a class="read-more-show" href="#">&rarr; Read More;</a>')

// Set up a link to hide the expanded content.
.append(' <a class="read-more-hide" href="#">&larr;Read Less;</a>');

// Set up the toggle effect:
$('.read-more-show').on('click', function(e) {
  $(this).next('.read-more-content').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

$('.read-more-hide').on('click', function(e) {
  $(this).parent('.read-more-content').addClass('hide').parent().children('.read-more-show').removeClass('hide');
  e.preventDefault();
});
