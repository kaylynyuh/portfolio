(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(nextFunction) {
    $.ajax({
      url: 'https://api.github.com/users/kaylynyuh/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + token,
      },
      success: function(data, message, xhr) {
        data.forEach(function(elem) {
          reposObj.allRepos.push(elem);
        });
      }
    }).done(nextFunction);
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  reposObj.getSelectRepos = function() {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo['name'] === 'cookie-stand' || aRepo['name'] === 'bus-mall';
    });
  };

  reposObj.allRepos.map(function(repoObj) {
    return repoObj.name;
  });

  module.reposObj = reposObj;
})(window);
