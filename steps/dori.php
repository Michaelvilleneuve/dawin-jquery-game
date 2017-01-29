<section id="dori">
  <p>
    Tu rencontres une certaine "Dori" qui prétend avoir vu le bateau qui a capturé Némo.
    <br>
    Elle a l'air gentille, mais ses paroles sont incohérentes. Tu ne sais pas trop quoi penser.
    <br>
    Elle te propose son aide.
  </p>

  <div class="actions">
    <button
      class="action"
      data-step="masque"
      data-bonus="1"
    >
      Accepter
    </button>

    <button
      class="action"
      data-step="kidnapping"
      data-message="C'est méchant d'être méchant. Vilain. Tu retournes en arrière."
      data-bonus="-1"
    >
      Lui dire d'aller se faire voir
    </button>

    <button
      class="action"
      data-step="dori"
      data-bonus="0"
      data-message="Tu as peur tout seul dans le noir, tu fais demi-tour."
    >
      L'ignorer
    </button>
  </div>
</section>
