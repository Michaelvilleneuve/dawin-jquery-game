var Game = {
  currentStep: 'beginning',
  lifes: 3,
  bonus: 0,

  init: function () {
    $('.start').on('click', function () {
      document.querySelector('audio').muted = true;
    });
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
    var newEl = $('#' + this.currentStep);
    $('section').removeClass('active');
    newEl.addClass('active');
    this.addVideo(newEl);
    $('.bonus').html(this.bonus * 10 + ' points');
  },

  addVideo: function (el) {
    $('#vid').remove();
    var source = '/assets/videos/' + $(el).attr('id') + '.mp4';

    if (el.hasClass('video')) {
      el.prepend('<video id="vid" autoplay><source src="' + source + '" type="video/mp4"></video>');
      $('#vid').on('ended click', function () {
        el.css('background-image', 'url(\'assets/img/' + Game.currentStep + '.jpg\')');
        el.addClass('ended');
        $(this).remove();
      });
    } else {
      el.css('background-image', 'url(\'assets/img/' + this.currentStep + '.jpg\')');
    }
  },

  endGame: function () {
    if (confirm('Tu as perdu ! Rejouer ? ')) {
      this.replay();
    }
  },

  replay: function () {
    this.lifes = 3;
    this.bonus = 0;
    this.currentStep = 'beginning';
    this.init();
  }

};

$(document).ready(function () {
  Game.init();
});
