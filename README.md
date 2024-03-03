# FormIoDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



Form.io Angular JSON Form Renderer
==========================
This library serves as a Dynamic JSON Powered Form rendering library for [Angular](https://angular.io). This works by
providing a JSON schema to a ```<formio>``` Angular component, where that form is dynamically rendered within the front
end application. This allows forms to be dynamically built using JSON schemas.

Angular Versions
-------------------------
This library supports many different Angular Versions. If you wish to use this library with your specific version of Angular, then you will need to install the following versions.

## Angular 17
Angular 17 versions are currently released as "latest" so you can install with Angular 17 with the following commands.

### NPM
    npm install --save @formio/angular

Usage
----------------
To use this library within your project, you will first need to install it as a dependency.

```
npm install --save @formio/angular@rc @formio/js 
```

```
npm install --save @formio/core
```

```
npm install --save formiojs
```

Bootstrap Versions
-----------------
By default, this library will use Bootstrap 5 as the template and rendering CSS framework. This, however, can be changed by adding different templates into your application and using them like the following.

```
npm install bootstrap@4.6.0 --save --legacy-peer-deps
```

jquery Versions
-----------------

```
npm install --save jquery@3.5.1
```


Angular Data Grid Component
-----------------
The Angular Data Grid component is a powerful and flexible tool for displaying and manipulating tabular data. Angular Data Grid component is its ability to bind to a wide range of data sources, including arrays of JSON objects, OData web services, and the Syncfusion DataManager. 

```
npm install --save @syncfusion/ej2-angular-grids
```

<!-- --legacy-peer-deps -->



angular elements
-----------------
If you have any questions, create a new issue in this repo by choosing "Custom Components Support Request".

Starting from angular-formio v4.3.0 you can register an Angular component as a formio field. It uses the @angular/elements in the background, so that package is required as peer dependency.

```
npm install --save @webcomponents/webcomponentsjs
```


