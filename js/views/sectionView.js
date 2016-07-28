(function() {
  function showNav() {
    $('.icon-menu').click(function() {
      console.log('working');
      $('#primary-nav').slideToggle('slow');
    });
  };

  function readMore() {
    $('.read-more-content').addClass('hide')
      .before('<a class="read-more-show" href="#">&rarr; Read More;</a>')
      .append(' <a class="read-more-hide" href="#">&larr;Read Less;</a>');
    $('.read-more-show').on('click', function(e) {
      $(this).next('.read-more-content').removeClass('hide');
      $(this).addClass('hide');
      e.preventDefault();
    });
  };

  function readMoreHide() {
    $('.read-more-hide').on('click', function(e) {
      $(this).parent('.read-more-content').addClass('hide').parent().children('.read-more-show').removeClass('hide');
      e.preventDefault();
    });
  };

  function indexScroll() {
    $('.navItem').on('click', function() {
      var sectionIdentifier = $(this).data('section');
      var windowWidth = $(window).width();
      if (windowWidth > 760) {
        console.log('window is greater than 760!');
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
  };
  indexScroll();
  showNav();
  readMore();
})(window);
