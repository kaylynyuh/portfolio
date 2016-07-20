(function(){

  // handle social icons
  var socialNetworks = ['linkedin', 'github', 'twitter'];
  var socialNetworkIcons = socialNetworks.map(function(ele){
    return 'icon-' + ele;
  });

  socialNetworkIcons.forEach(function(network){
    $('#social-icons').append('<li><a href="#" class="' + network + '"></a></li>');
  });
  console.log(socialNetworkIcons);
/////
  var favoriteHikes = ['Bridal Veil Falls', 'Mt. Pilchuck', 'Lake Serene', 'Cherry Creek Falls', 'Lake Twenty Two', 'Cape Flattery', 'Boulder River Creek'];

  var total = favoriteHikes.reduce(function(sum, word){
    return sum + word.length;
  }, 0);
  console.log(total);
/////
  $('.icon-menu').click(function() {
    $('#primary-nav').slideToggle('slow');
  });

  function Section (opts) {
    this.name = opts.name;
    this.title = opts.title;
    this.body = opts.body;
  }

  Section.all = [];

  Section.prototype.toHtml = function(scriptTemplateId) {
    var source = $('#section-template').text();
    var template = Handlebars.compile(source);
    return template(this);
  };

  //loading the new sections
  Section.loadAll = function(dataWePassIn) {
    dataWePassIn.forEach(function(ele) {
      Section.all.push(new Section(ele));
    });
  };


  //the else will use .get() to request data from the server
  Section.fetchAll = function() {
    if (localStorage.sections) {
      Section.loadAll(JSON.parse(localStorage.sections));
      appendSections();
    } else {
      // Load our json data
      $.ajax({
        type: 'GET',
        url: '/js/sections.json',
        dataType: 'json'
      }).done(function(data) {
        // Store that data in localStorage so we can skip the server call next time
        localStorage.sections = JSON.stringify(data);
        Section.loadAll(data);
        appendSections();
      });
    }
  };

  appendSections = function () {
    Section.all.forEach(function(generateNewSections) {
      $('main').append(generateNewSections.toHtml('#section-template'));
    });
  };

  Section.fetchAll();

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

  $(function() {
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
  });
})();
