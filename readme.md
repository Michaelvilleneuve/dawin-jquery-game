Vous pouvez jouer au jeu à l'adresse suivante :
https://jquery-dawin.herokuapp.com


Installation
===

Pré-requis : Avoir installé Node.JS et NPM. Ensuite :

Pour développer en ES6 et compiler le JS :
`
sudo npm install -g webpack
`

Pour installer les dépendances :
`
npm install
`

Pour recompiler automatiquement le JS :
`
webpack --watch
`

Pour lancer le serveur :
`
node server.js
`

Ou se trouve le jeu ?
--
Le code du jeu se trouve à la racine : game.js.
Le reste est dans le dossier public.


Pourquoi utiliser un serveur et non ouvrir index.html ?
--
Les appels ajax n'étant autorisés qu'au sein du même nom de domaine, il est impossible d'appeler en xhr des chemins de fichiers sur le disque dur.
On doit donc scoper le tout via un serveur.

En l'occurence, c'est scopé sur localhost:3000

J'ai préféré intégrer Node.JS afin de rester dans du JS qui est un peu l'objet du cours. De plus dans la mesure ou j'utilise des packages NPM, c'est cohérent de rester sur ce principe.

Mais vous pouvez toujours copier le contenu du dossier public et l'utiliser comme n'importe quel serveur du genre :

``
sudo php -S localhost:3000 ./
``

Les étapes pour gagner
--
1. Commencer
2. Partir à sa recherche
3. Accepter
4. Demander son aide
5. Suivre la direction qu'ils indiquent (raccourci: 'Ton instinct te dis de prendre direction ouest')
6. Continuer
7. Passer par dessus (raccourci: 'Tenter de passer à travers')
8. Décider de sauter sur le chapeau des méduses
9. Continuer
10. Rejoindre les tortues
11. Accepter la proposition absurde
12. Continuer
13. Sauter dans le bec du pélican
14. Continuer
