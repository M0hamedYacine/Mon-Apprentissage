Cette Todo App est une application simple de gestion de tâches développée avec HTML, JavaScript et Tailwind CSS.
Après le projet météo, ce projet m’a permis de réutiliser et consolider plusieurs propriétés JavaScript déjà vues, tout en approfondissant de nouvelles notions liées à la manipulation du DOM et à la gestion des événements.

Les propriétés JavaScript déjà utilisées dans le projet météo et réappliquées ici  :

querySelector / getElementById pour sélectionner des éléments HTML,

innerHTML pour lire ou modifier dynamiquement le contenu,

className / classList pour afficher, masquer ou styliser des éléments (avec Tailwind CSS),

addEventListener pour réagir aux actions de l’utilisateur.

Ce projet m’a également permis de comprendre et d’utiliser de nouvelles propriétés et méthodes, notamment :

createElement pour créer dynamiquement des éléments HTML,

appendChild pour ajouter ces éléments dans le DOM,

value pour récupérer les données saisies dans les champs de formulaire.

La fonction saveData a introduit la notion de persistance des données côté navigateur, en permettant de sauvegarder la liste des tâches localement et de les restaurer après une actualisation de la page.

Enfin, l’utilisation d’un écouteur d’événement placé sur le conteneur principal m’a permis de mieux comprendre :

le fonctionnement de l’objet event fourni par le navigateur,

l’usage de e.target pour identifier précisément l’élément à l’origine de l’action,

et e.target.tagName pour déterminer le type de balise concernée.
