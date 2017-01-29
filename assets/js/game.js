var Game = {
  currentStep: 'beginning',
  lifes: 5,
  bonus: 0,

  init: function () {
    this.setLifes();
    this.setStage();
    this.setActions();
  },

  setLifes: function () {
    $('.lifes').html('');
    for (var i = 0; i < this.lifes; i++) {
      $('.lifes').append('❤️');
    }
  },

  setActions: function () {
    $(document).on('click', 'button.action', this.toggleStep.bind(this));
  },

  toggleStep: function (e) {
    var element = $(e.target);
    if (typeof element.data('message') !== 'undefined') {
      this.transition(element.data('message'));
    }

    this.currentStep = element.data('step');
    this.bonus += element.data('bonus');
    typeof element.data('wrong') === 'undefined' ? this.setStage() : this.loseLifeAndSetStage();
  },

  transition: function (message) {
    var transitionEl = $('#transition');

    $('section').removeClass('active');

    transitionEl.addClass('active').find('div').html(message);
    setTimeout(function () {
      transitionEl.removeClass('active');
    }, 5000);
  },

  loseLifeAndSetStage: function () {
    this.loseLife();
    this.setStage();
  },

  loseLife: function () {
    this.lifes--;
    this.setLifes();
    if (this.lifes === 0) {
      this.endGame();
    }
  },

  setStage: function () {
    $('section').removeClass('active');
    $('#' + this.currentStep).addClass('active');
  },

  endGame: function () {
    if (confirm('Fin du jeu ! Rejouer ? ')) {
      this.replay();
    }
  },

  replay: function () {
    this.lifes = 5;
    this.bonus = 0;
    this.currentStep = 'beginning';
    this.init();
  }

};

$(document).ready(function () {
  Game.init();
});
