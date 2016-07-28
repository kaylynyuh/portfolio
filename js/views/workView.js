(function(module){

  function Work (opts) {
    this.name = opts.name;
    this.title = opts.title;
    this.body = opts.body;
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

  Work.appendWorks = function() {
    Work.all.forEach(function(ele) {
      $('.work-content').append(ele.toHtml('#work-template'));
    });
  };

  Work.fetchAll = function() {
    if (localStorage.work) {
      Work.loadAll(JSON.parse(localStorage.Work));
      Work.appendWorks();
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
        Work.appendWork();
      });
    }
  };

  Work.fetchAll();
  module.Work = Work;
})(window);
