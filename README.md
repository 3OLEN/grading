# OLEN Grading

« OLEN Grading » est une application développée pour l'[enseignement numérique] du centre de formation [ORT LYON].

## 📜 Contexte

Les étudiantes <abbr title="ORT Lyon Enseignement Numérique">OLEN</abbr> sont évalués par le biais de modules
d'enseignement et de modules professionnels pour valider respectivement le niveau de formation et le caractère
professionnel de l'étudiant·e.

Les formateurs définissent les évaluations relatives à leur·s module·s ainsi que le barème et le système de notation.

Par ailleurs, les étudiantes sont également évalués lors de diverses présentations orales à propos de leur activité
professionnelle en entreprise, de la réalisation de projets de groupe et de leur soutenance de fin de formation
(<abbr title="Compte-Rendu d'Activité">CRA</abbr> et sujet d'analyse ou mémoire pour les 5ᵉˢ années).

Les notes de modules sont remontées auprès du·de la responsable de niveau qui doit alors l'intégrer dans le système de
notation de la formation en question afin de valider le niveau des étudiantes et, potentiellement, définir les
rattrapages et les redoublements.

Concernant les épreuves orales, certaines doivent être soutenues devant un jury composé de professionnels. Chacun·e
évalue les candidats, puis le jury détermine les notes de son périmètre pour finalement les fournir au·à la
responsable qui tient un comité d'harmonisation afin d'en décider la finalité.

## 🎯 Objectifs

L'application doit permettre aux formateurs de définir leurs évaluations et les barèmes associés. Par la suite,
l'application doit leur permettre de saisir les notes de leurs étudiants puis de les communiquer au·à la responsable.

Pour une épreuve orale, le·a responsable doit pouvoir définir une grille d'évaluation, la composition des jurys et
l'affectation des candidats aux divers jurys.

Chaque membre de jury doit pouvoir noter ses candidats et prendre des notes. Toute cette saisie peut alors permettre,
suite à une discussion, au jury d'établir la note de chaque candidat·e. Le·a responsable de l'épreuve doit ainsi avoir
accès à l'ensemble des notes et remarques.

L'application doit permettre une harmonisation des notes de l'épreuve orale en prenant en considération un temps
d'échanges avec l'ensemble des jurys.

Enfin, une validation des notes de chaque étudiant·e doit être possible pour définir le niveau de l'étudiant·e
concerné·e et mettre au point la décision de son année de formation ou organiser les sessions de rattrapage.

Les notes doivent alors être figées une fois la formation clôturée.

## 🏗️ Environnement technique

L'application est découpée en une application Front et une application Back.

### Back

* API de gestion des données.
  * Prend en charge les diverses règles métier. 
* PHP 8.3.
  * Composer 2. 
* Symfony 6.4.

### Front

* Interface de présentation et de manipulation des données par le biais de l'API.
  * Prend en charge les diverses règles métier. 
* Angular 16.
  * Node 20.
* TypeScript.
* SCSS.

[//]: # (----------------------------------------------------------------------------------------------------)

[ORT LYON]: https://ort-france.fr/lyon
[enseignement numérique]: https://ort-france.fr/nos-formations/les-metiers-du-numerique-et-linformatique
