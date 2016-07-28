(function(module){

  function Icon (opts) {
    this.url = opts.url;
    this.iconClass = opts.iconClass;
  }

  Icon.all = [];

  Icon.prototype.toHtml = function(scriptTemplateId) {
    var source = $(scriptTemplateId).text();
    var template = Handlebars.compile(source);
    return template(this);
  };

  //loading the new sections
  Icon.loadAll = function(dataWePassIn) {
    dataWePassIn.forEach(function(ele) {
      Icon.all.push(new Icon(ele));
    });
  };

  Icon.appendIcons = function() {
    Icon.all.forEach(function(ele) {
      $('.social-icons').append(ele.toHtml('#social-icons-template'));
    });
  };

  Icon.fetchAll = function() {
    if (localStorage.icons) {
      Icon.loadAll(JSON.parse(localStorage.icons));
      Icon.appendIcons();
    } else {
      // Load our json data
      $.ajax({
        type: 'GET',
        url: '/data/icons.json',
        dataType: 'json'
      }).done(function(data) {
        // Store that data in localStorage so we can skip the server call next time
        localStorage.icons = JSON.stringify(data);
        Icon.loadAll(data);
        Icon.appendIcons();
      });
    }
  };

  Icon.fetchAll();
  module.Icon = Icon;
})(window);
