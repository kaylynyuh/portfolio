(function(module) {
  var repoView = {};

  /* Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */

  var repoCompiler = Handlebars.compile($('#repo-template').text());


  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('forks')  //experiment changing this attribute!
      .map(repoCompiler)
    );
    // console.log(reposObj.withTheAttribute('forks'));
  };
/*  Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */

  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
