(function(module){

  function Work (opts) {
    this.name = opts.name;
    this.projectName = opts.projectName;
    this.projectLink = opts.projectLink;
    this.iconClass = opts.iconClass;
    this.paragraph = opts.paragraph;
    this.paragraphReadMore = opts.paragraphReadMore;
  }

  Work.all = [];

  Work.prototype.toHtml = function(scriptTemplateId) {
    var source = $(scriptTemplateId).text();
    var template = Handlebars.compile(source);
    return template(this);
  };

  //loading the new sections
  Work.loadAll = function(dataWePassIn) {
    dataWePassIn.forEach(function(ele) {
      Work.all.push(new Work(ele));
    });
  };

  Work.appendWorkSection = function() {
    Work.all.forEach(function(ele) {
      $('.work').append(ele.toHtml('#work-template'));
    });
    $('.read-more-content').addClass('hide');
  };

  Work.fetchAll = function() {
    if (localStorage.work) {
      Work.loadAll(JSON.parse(localStorage.Work));
      Work.appendWorkSection();
    } else {
      // Load our json data
      $.ajax({
        type: 'GET',
        url: '/data/work.json',
        dataType: 'json'
      }).done(function(data) {
        // Store that data in localStorage so we can skip the server call next time
        localStorage.Work = JSON.stringify(data);
        Work.loadAll(data);
        Work.appendWorkSection();
      });
    }
  };

  Work.fetchAll();
  module.Work = Work;
})(window);
