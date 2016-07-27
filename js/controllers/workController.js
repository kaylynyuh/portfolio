(function(module) {
  var workController = {};
  workController.reveal = function() {
    $('.nav-item').hide();
    $('[data-section=work]').fadeIn();
  };
  module.workController = workController;
})(window);
