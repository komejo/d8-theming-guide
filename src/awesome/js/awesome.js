(function ($) {
  Drupal.behaviors.mymodule = {
    attach: function (context, settings) {
      $('main').append('<p>Hello world</p>');
    }
  };
}(jQuery));