# RuleOfThumb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## DEPLOYED

[![Netlify Status](https://api.netlify.com/api/v1/badges/ce698e04-2413-47c6-8a36-9afed7372ba6/deploy-status)](https://app.netlify.com/sites/rule-of-thumb/deploys)

## Features

- Get a random person from the back end to show in the hero (banner) section every time the user enters to the home page
- Show the list of Public Figures (persons) in the home page
- Is possible to vote for a Public Figure
  - The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed)
  - Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again
  - There is no limit in the amount of votes
  - Percentage bars change depending on the up/or downs votes.
- Routing
  -  The routing reloads the content of the site, the menu and footer are always on the screen.
  -  Clicking on one of the links of the MENU redirects the user to the other pages (Other Pages are in blank).
  -  Clicking on one of the links of the FOOTER redirects the user to the other pages (Other Pages are in blank).
- Pesistance
  - The data is persisted using a back-end Rest API
  - The Rest API is deployed onheroku in this direction (https://back-rule-of-thumb.herokuapp.com/)
  - The Git Repo of the back-end is in: (https://github.com/Caivan/back-rule-of-thumb)
  - Check the back end repository to see the information about how to use the endpoints


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
