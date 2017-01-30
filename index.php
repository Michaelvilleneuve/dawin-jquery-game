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
	<div class="bonus"></div>

	<div id="transition"> <div></div> </div>

	<section id="beginning" class="ended">
		<div class="actions">
			<button class="action start" data-step="kidnapping" data-bonus="0">Commencer</button>
		</div>
	</section>


	<?php include('./steps/kidnapping.php'); ?>
	<?php include('./steps/dori.php'); ?>
	<?php include('./steps/masque.php'); ?>
	<?php include('./steps/poisson-lune.php'); ?>
	<?php include('./steps/poisson-lune-transition-1.php'); ?>
	<?php include('./steps/faille.php'); ?>
	<?php include('./steps/meduses.php'); ?>
	<?php include('./steps/meduses-transition-1.php'); ?>
	<?php include('./steps/meduses-transition-2.php'); ?>
	<?php include('./steps/tortues.php'); ?>
	<?php include('./steps/baleine.php'); ?>
	<?php include('./steps/baleine-transition-1.php'); ?>
	<?php include('./steps/pelican.php'); ?>
	<?php include('./steps/pelican-transition-1.php'); ?>
	<?php include('./steps/pelican-transition-2.php'); ?>
	<?php include('./steps/retrouvailles.php'); ?>

	<footer></footer>
</body>
</html>
