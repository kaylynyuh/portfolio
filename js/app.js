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
  if(this.body) {
    $newSection.find('p').text(this.body);
  } else {
    $newSection.find('p').remove();
  }
  $newSection.removeClass('template');
  return $newSection;
};

sections.forEach(function(ele) {
  curElem = new Section(ele);
  $('main').append(curElem.toHtml());
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
