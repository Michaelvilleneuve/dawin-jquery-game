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
