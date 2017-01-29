<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Find Nemo</title>
	<script
	  src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
	  integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc="
	  crossorigin="anonymous"
	></script>
	<link rel="stylesheet" href="assets/css/style.css" />
	<script src="assets/js/game.js"></script>
</head>
<body>

	<audio autoplay loop>
	  <source src="assets/sound/nemo.mp3" type="audio/mpeg" />
	</audio>

	<div class="lifes"></div>

	<div id="transition"> <div></div> </div>

	<section id="beginning">
		<div class="actions">
			<button class="action" data-step="intro" data-bonus="0">Commencer</button>
		</div>
	</section>

	<section id="intro">
		<p>Némo a été capturé, tu es son père, tu dois le libérer ! </p>
		<div class="actions">
			<button class="action" data-step="kidnapping" data-bonus="0">Continuer</button>
		</div>
	</section>

	<?php include('./steps/kidnapping.php'); ?>
	<?php include('./steps/dori.php'); ?>
	<?php include('./steps/masque.php'); ?>
	<?php include('./steps/poisson-lune.php'); ?>
	<?php include('./steps/poisson-lune-transition-1.php'); ?>
	<?php include('./steps/faille.php'); ?>
	<?php include('./steps/meduses.php'); ?>
</body>
</html>
