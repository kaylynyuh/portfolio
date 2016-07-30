(function(module){

  function Skills (opts) {
    this.skillName = opts.skillName;
  }

  Skills.all = [];

  Skills.prototype.toHtml = function(scriptTemplateId) {
    var source = $(scriptTemplateId).text();
    var template = Handlebars.compile(source);
    return template(this);
  };

  //loading the new sections
  Skills.loadAll = function(dataWePassIn) {
    dataWePassIn.forEach(function(ele) {
      Skills.all.push(new Skills(ele));
    });
  };

  Skills.appendSkillsSection = function() {
    console.log('foo');
    Skills.all.forEach(function(ele) {
      $('.skills-list').append(ele.toHtml('#skills-template'));
    });
  };

  Skills.fetchAll = function() {
    console.log('stuff');
    if (localStorage.Skills) {
      Skills.loadAll(JSON.parse(localStorage.Skills));
      Skills.appendSkillsSection();
    } else {
      // Load our json data
      $.ajax({
        type: 'GET',
        url: '../data/skills.json',
        dataType: 'json'
      }).done(function(data) {
        // Store that data in localStorage so we can skip the server call next time
        localStorage.Skills = JSON.stringify(data);
        Skills.loadAll(data);
        Skills.appendSkillsSection();
      });
    }
  };
  console.log('being called in');
  Skills.fetchAll();
  module.Skills = Skills;
})(window);
