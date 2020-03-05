(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  }

  FormHandler.prototype.addPaymentSubmit = function() {
    console.log('Setting up payment form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      console.log('Payment Submitted');
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      var $content;
      $content = $('<div id="content">Thank you ' + data["title"] + " " + data["username"] + ' for your purchase.</div>');
      $('body').append($content);
      $content.modal({
        show: 'true'
      });
      this.reset();
    })
  }

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
