var Game = {
  currentStep: "beginning",
  lifes: 5,

  init: function() {
    this.setLifes();
    this.setStage();
    this.setActions();
  },

  setLifes: function() {
    for (var i = 1; i < this.lifes; i++) {
      $('#lifes').append('<li></li>');
    }
  },

  setActions: function() {
    $(document).on('click', 'button.action', this.toggleStep.bind(this));
  },

  toggleStep: function(e) {
    var element = $(e.target);
    this.currentStep = element.data('step');

    element.data('wrong') ? this.setStage() : this.setStage();
  },

  setStage: function() {
    console.info('Going to ' + this.currentStep)
    $('section').removeClass('active');
    $('#' + this.currentStep).addClass('active');
  }

};

$(document).ready(function() {
  Game.init();
});
