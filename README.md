# CrowdFund

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Planning
  1. App Architecture
    * 3 Models: Project, Idea, Charity
    * app.routing.ts file
      <!--appRoutes
        '' -- Splash
        'projects' -- ProjectListComponent
        'ideas' -- IdeaListComponent
        'charities' - CharityListComponent
        'projects/:id' - ProjectDetailComponent
        'ideas/:id' - IdeaDetailComponent
        'charities/:id' - CharityDetailComponent
        'admin' - AdminComponent
      -->
    * Root Component ('/')
      * Navbar - Routes to Following Components
        * Project-List
          * Route to Project-Detail Component, using service
          * Add New Project Form
        * Idea-List
          * Route to Idea-Detail Component, using service
          * Add New Idea Form
        * Charity-List
          * Route to Charity-Detail Component, using service
          * Add new Charity Form
      * Footer - Routes to Admin Component
    * Splash Component  

    * Admin Component
      * 3 Columns for each Object Type
        * Each column contains add-new form, with list of all object of that type underneath, with edit & delete buttons.
          * Potentially use a variable value to hide/show buttons for user vs. admin view.
    * Project Service
    * Idea Service
    * Charity Service

    * firebase api-keys.ts file, included in .gitignore

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
