# OLEN Grading - Front

L'application Front a été générée avec [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## 💻️ Environnement de développement

L'application est montée sur un environnement Docker selon les règles établies ci-dessous :

* 🐋 `olenbvillena/angular-17:1.0.0` : Image pour angular, basée sur node@20.11.
  - 📦️ `olen-grading-front-app` : Container *standalone* pour lancer l'application.
  - 📦️ `dev--olen-grading-front-ng` : Container *standalone* pour exécuter les commandes angular `ng`.
  - 📦️ `dev--olen-grading-front-npm` : Container *standalone* pour exécuter les commandes `npm`.

### 📋️ Instructions

Le projet repose sur l'utilisation de scripts afin d'effectuer les diverses opérations nécessaires au projet :

* `bin/start` : Met en place l'application à travers le 📦️ `olen-grading-front-app`.
  <br>L'application est alors accessible par l'adresse http://localhost:4200/.

#### Commandes utiles

* `bin/ng` : Exécute les commandes angular `ng` ; par défaut exécutera `ng --help`.
* `bin/npm` : Exécute les commandes `npm` ; par défaut exécutera `npm help`.

#### Configurations

* `bin/setup/docker-angular` : Construit l'image 🐋 pour angular.
