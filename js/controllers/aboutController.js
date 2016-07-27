(function(module) {
  var aboutController = {};



  aboutController.reveal = function() {
    $('.nav-item').hide();
    $('[data-section=about]').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
