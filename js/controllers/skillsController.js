(function(module) {
  var skillsController = {};
  skillsController.reveal = function() {
    $('.nav-item').hide();
    $('[data-section=skills]').fadeIn();
  };
  module.skillsController = skillsController;
})(window);
