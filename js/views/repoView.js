(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());


  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('name')  
      .map(repoCompiler)
    );
    console.log(reposObj.withTheAttribute('name'));
  };

  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
