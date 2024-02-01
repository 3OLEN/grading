# OLEN Grading - Front

L'application Front a été générée avec [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## 💻️ Environnement de développement

L'application est montée sur un environnement Docker selon les règles établies ci-dessous :

* 🐋 `olenbvillena/angular-17:1.0.0` : Image pour angular, basée sur node@20.11.
  - 📦️ `olen-grading-front-app` : Container *standalone* pour lancer l'application.
  - 📦️ `dev--olen-grading-front-ng` : Container *standalone* pour exécuter les commandes angular `ng`.
  - 📦️ `dev--olen-grading-front-npm` : Container *standalone* pour exécuter les commandes `npm`.
* 🐋 `olenbvillena/front-ci:1.0.0` : Image pour l'environnement de CI, basée sur node@20.11.
  - 📦️ `ci--olen-grading-front-audit` : Container *standalone* pour exécuter `npm audit`.
  - 📦️ `ci--olen-grading-front-dprint` : Container *standalone* pour exécuter l'outil `dprint`.
  - 📦️ `ci--olen-grading-front-eslint` : Container *standalone* pour exécuter l'outil `eslint`.
  - 📦️ `ci--olen-grading-front-stylelint` : Container *standalone* pour exécuter l'outil `stylelint`.

### 📋️ Instructions

Le projet repose sur l'utilisation de scripts afin d'effectuer les diverses opérations nécessaires au projet :

* `bin/start` : Met en place l'application à travers le 📦️ `olen-grading-front-app`.
  <br>L'application est alors accessible par l'adresse http://localhost:4200/.

#### Commandes utiles

* `bin/ng` : Exécute les commandes angular `ng` ; par défaut exécutera `ng --help`.
* `bin/npm` : Exécute les commandes `npm` ; par défaut exécutera `npm help`.
* `bin/stop` : Arrête l'application et détruit le 📦️ `olen-grading-front-app`.

#### Configurations

* `bin/setup/docker-angular` : Construit l'image 🐋 pour angular.
* `bin/setup/docker-ci` : Construit l'image 🐋 pour la CI.

### 👷 CI

Le projet repose sur des scripts de vérification, de validation et de correction par le biais d'un environnement Docker
spécifique à un contexte de "CI".

Plusieurs scripts sont à disposition :

* `bin/ci/all` : Exécute tous les scripts de CI dans un ordre "préférentiel".
  - `--no-cache` : Fournit l'option `--no-cache` aux outils pour empêcher l'utilisation du cache.
  - `--fix` : Fournit l'option `--fix` aux outils pour exécuter les modifications automatiques.
  - `--debug` : Fournit l'option `--debug` aux outils pour afficher les messages de *debug*.
* `bin/ci/audit` : Exécute la commande `npm audit`.
  - `--fix` : Exécute les instructions de "fix".
* `bin/ci/dprint` : Exécute la commande `npx dprint` ; par défaut exécutera `npx dprint ./`.
  - `--no-cache`: Empêche `dprint` d'utiliser le cache pour sa prochaine analyse.
  - `--fix` : Exécute les instructions de "fix".
  - `--debug` : Affiche les messages de *debug*.
  - Des fichiers / *patterns* peuvent être fournis pour surcharger le *pattern* global de base.
* `bin/ci/eslint` : Exécute la commande `npx eslint` ; par défaut exécutera `npx eslint --cache ./`.
  - `--no-cache`: Empêche `eslint` d'utiliser le cache pour sa prochaine analyse.
  - `--fix`: Exécute les instructions de "fix".
  - `--debug` : Affiche les messages de *debug*.
  - Des fichiers / *patterns* peuvent être fournis pour surcharger le *pattern* global de base.
* `bin/ci/stylelint` : Exécute la commande `npx stylelint` ; par défaut exécutera `npx stylelint --cache "**/*.scss"`.
  - `--no-cache`: Empêche `stylelint` d'utiliser le cache pour sa prochaine analyse.
  - `--fix`: Exécute les instructions de "fix".
  - `--debug` : Affiche les messages de *debug*.
  - Des fichiers / *patterns* peuvent être fournis pour surcharger le *pattern* global de base.
