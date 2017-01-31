const Game = {
  currentStep: 'beginning',
  lifes: 3,
  bonus: 0,
  scenes: [
    'baleine',
    'baleine-transition-1',
    'dori',
    'faille',
    'kidnapping',
    'masque',
    'meduses',
    'meduses-transition-1',
    'meduses-transition-2',
    'pelican',
    'pelican-transition-1',
    'pelican-transition-2',
    'poisson-lune',
    'poisson-lune-transition-1',
    'retrouvailles',
    'tortues'
  ],

  init() {
    this.setScenes();
    this.setLifes();
    this.setStage();
    this.setActions();
  },

  setScenes() {
    for (let i = 0; i < this.scenes.length; i++) {
      $.get(`steps/${this.scenes[i]}.html`, data => {
        $('#section-container').append(data);
      });
    }
  },

  setLifes() {
    $('.lifes').html('');
    for (let i = 0; i < this.lifes; i++) {
      $('.lifes').append('<img src="/assets/img/nemo.png"/>');
    }
  },

  setActions() {
    $(document).on('click', '.start', () => {
      document.querySelector('audio').muted = true;
    });
    $(document).on('click', '.replay', this.replay.bind(this));
    $(document).on('click', 'button.action', this.toggleStep.bind(this));
  },

  toggleStep(e) {
    const element = $(e.target);
    if (typeof element.data('message') !== 'undefined') {
      this.transition(element.data('message'));
    } else {
      this.transitionSimple();
    }
    this.currentStep = element.data('step');
    this.addBonus(element.data('bonus'));

    setTimeout(() => {
      typeof element.data('wrong') === 'undefined' ? Game.setStage() : Game.loseLifeAndSetStage();
    }, 1200);
  },

  addBonus(bonus) {
    this.bonus += bonus;
    this.showResult();

    if (bonus !== 0) {
      $('#bonus-animation').html(`${bonus > 0 ? '+' : ''}${bonus * 10}`).addClass('animate-point');
      setTimeout(() => {
        $('#bonus-animation').removeClass('animate-point');
      }, 2000);
    }
  },

  showResult() {
    let result = '';
    if (this.bonus < 3) {
      result = 'Vous êtes un très mauvais père ! Vous méritez de mourrir.';
    } else if (this.result < 5) {
      result = 'Vous ne vous êtes pas foulé... Némo mérite mieux que vous !';
    } else if (this.result < 8) {
      result = 'Mouais, dans la moyenne. On va espèrer que ça ne vous arrive pas quand même...';
    } else if (this.result < 10) {
      result = 'Ouah pas mal ! Vous êtes un bon père, c\'est sûr !';
    } else {
      result = 'Incroyable !! On croirait presque que vous avez triché !!';
    }
    $('#result').html(result);
  },

  transitionSimple() {
    $('#overlay').addClass('show');
    setTimeout(() => {
      $('#overlay').removeClass('show');
    }, 2000);
  },

  transition(message) {
    const transitionEl = $('#transition');

    $('section').removeClass('active');

    transitionEl.addClass('active').find('div').html(message);
    setTimeout(() => {
      transitionEl.removeClass('active');
    }, 3000);
  },

  loseLifeAndSetStage() {
    this.loseLife();
    this.setStage();
  },

  loseLife() {
    this.lifes--;
    this.setLifes();
    if (this.lifes === 0) {
      this.endGame();
    }
  },

  setStage() {
    const newEl = $(`#${this.currentStep}`);
    $('section').removeClass('active');
    newEl.addClass('active');
    this.addVideo(newEl);
    $('.bonus').html(this.bonus * 10);
  },

  addVideo(el) {
    $('#vid').remove();
    const source = `assets/videos/${$(el).attr('id')}.mp4`;

    el.css('background-image', `url('assets/img/${Game.currentStep}.jpg')`);
    if (el.hasClass('video')) {
      el.prepend(`<div><video id="vid" autoplay><source src="${source}" type="video/mp4"></video></div>`);
      $('#vid').on('ended click', function () {
        el.addClass('ended');
        $(this).parent().addClass('removing');
        setTimeout(() => {
          $('#vid').remove();
        }, 2000);
      });
    }
  },

  endGame() {
    if (confirm('Tu as perdu ! Rejouer ? ')) {
      this.replay();
    }
  },

  replay() {
    this.lifes = 3;
    this.bonus = 0;
    this.currentStep = 'beginning';
    this.setLifes();
    this.setStage();
    this.setActions();
  }

};

$(document).ready(() => {
  Game.init();
});
