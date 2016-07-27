(function(module) {
  var contactController = {};
  contactController.reveal = function() {
    $('.nav-item').hide();
    $('[data-section=contact]').fadeIn();
  };
  module.contactController = contactController;
})(window);
