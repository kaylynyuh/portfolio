(function(){

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

  Section.appendSections = function() {
    Section.all.forEach(function(ele) {
      $('main').append(ele.toHtml('#section-template'));
    });
  };


  //the else will use .get() to request data from the server
  Section.fetchAll = function() {
    if (localStorage.sections) {
      Section.loadAll(JSON.parse(localStorage.sections));
      Section.appendSections();
    } else {
      // Load our json data
      $.ajax({
        type: 'GET',
        url: '/data/sections.json',
        dataType: 'json'
      }).done(function(data) {
        // Store that data in localStorage so we can skip the server call next time
        localStorage.sections = JSON.stringify(data);
        Section.loadAll(data);
        Section.appendSections();
      });
    }
  };

  Section.fetchAll();
})(window);
