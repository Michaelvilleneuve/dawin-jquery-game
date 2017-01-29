<section id="masque">
  <p>
      Sur le chemin, vous trouvez le masque du plongeur qui a enlevé Némo.
      <br/>
      Il y a une inscription dessus et tu dois la déchiffrer.
      <br/>
      Dori prétend savoir lire.
  </p>

  <div class="actions">
    <button
      class="action"
      data-step="poisson-lune"
      data-bonus="1"
    >
      Demander son aide
    </button>

    <button
      class="action"
      data-step="dori"
      data-bonus="-1"
      data-message="Le requin n'était finalement pas gentil. Il t'a mangé... Tu recules d'une case."
    >
      Demander de l'aide à un requin que tu viens de rencontrer
    </button>

    <button
      class="action"
      data-step="masque"
      data-bonus="0"
      data-message="Ça fait une heure que tu essaies. Tu as besoin d'aide."
    >
      Essayer de le déchiffrer tout seul bien que tu ne saches pas lire
    </button>
  </div>
</section>
