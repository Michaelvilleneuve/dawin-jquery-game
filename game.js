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

    $('.start').on('click', () => {
      document.querySelector('audio').muted = true;
    });

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
      $('.lifes').append('❤️');
    }
  },

  setActions() {
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
    this.bonus += element.data('bonus');

    setTimeout(() => {
      typeof element.data('wrong') === 'undefined' ? Game.setStage() : Game.loseLifeAndSetStage();
    }, 1200);
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
    $('.bonus').html(`${this.bonus * 10} points`);
  },

  addVideo(el) {
    $('#vid').remove();
    const source = `assets/videos/${$(el).attr('id')}.mp4`;

    if (el.hasClass('video')) {
      el.prepend(`<video id="vid" autoplay><source src="${source}" type="video/mp4"></video>`);
      $('#vid').on('ended click', function () {
        el.css('background-image', `url('assets/img/${Game.currentStep}.jpg')`);
        el.addClass('ended');
        $(this).remove();
      });
    } else {
      el.css('background-image', `url('assets/img/${this.currentStep}.jpg')`);
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
    this.init();
  }

};

$(document).ready(() => {
  Game.init();
});
