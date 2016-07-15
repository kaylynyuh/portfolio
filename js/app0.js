$('.icon-menu').click(function() {
  $('#primary-nav').slideToggle('slow');
});

var sectionsArr = [];

Section.prototype.toHtml = function() {
  var source = $('#section-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

sections.forEach(function(sectionObject) {
  sectionsArr.push(new Section(sectionObject));
});

sectionsArr.forEach(function(ourNewInstantiatedSectionObject){
  $('main').append(ourNewInstantiatedSectionObject.toHtml());
});


function Section (opts) {
  for (key in opts) this[key] = opts[key];
}

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
