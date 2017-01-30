<section id="meduses" class="video">
  <p>
    Sur le chemin, un obstacle se présente : un énorme banc de méduses vous bloque le passage.
  </p>

  <div class="actions">
    <button
      class="action"
      data-step="faille"
      data-bonus="-1"
      data-message="Tu es mort électrocuté par les méduses. Tu reviens en arrière."
      data-wrong
    >
      Essayer de passer entre les méduses
    </button>

    <button
      class="action"
      data-step="meduses-transition-1"
      data-bonus="1"
    >
      Décider de sauter sur le chapeau des méduses
    </button>

    <button
      class="action"
      data-step="meduses-transition-2"
      data-bonus="0"
    >
      Aller à la surface pour essayer de voir plus loin
    </button>
  </div>
</section>
