(function(window) {
  'use strict';
  var PAYMENT_FORM = '[data-payment="form"]';
  var App = window.App;
  var FormHandler = App.FormHandler;

  var payForm = new FormHandler(PAYMENT_FORM);
  payForm.addPaymentSubmit();
})(window);
