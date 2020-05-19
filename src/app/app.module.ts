/*
importants notes
start-flow of angular:
  angular.js (definition of where is the "main" and more) -> main.ts (defines .bootstrapModule(AppModule) aka
    server.start()) -> app.module.ts (defines all components for the angular application and loads these) ->
    -> app-component is started by app.module.ts
 
most important building blocks of angular:
  module
        - module is a class with @NgModule metadata
        - each ng-app has at least one root module
        - intention: encapsulation of different similar functionalities
        - allows to group together other building blocks like components, directives, pipes, ...
  component
        - described with @Component decorator which tells
            - the following is 1 component + component metadata e.g.
                @Component({
                  selector: 'app-root',
                  templateUrl: './app.component.html',
                  styleUrls: ['./app.component.css']
                })
        - all components define classes which have application data and logic
        - controlls the view
        - are associated with a html template
        - are created upated deleted (=lifecycle of component) by angular as you proceed
          while browsing (page-change or something like that)
                - lifecycle can be recognized+modified with lifecycle-hooks e.g. ng-onchanges, ng-oninit, ng-docheck ect.
  metadata
        - informs ng with all data which is required to build 1 component with its view
                - links templates with components
        -  e.g.
                @Component({
                  selector: 'app-root', // selector tells: if ng finds this tag in html-template->insert this component
                  templateUrl: './app.component.html', // module relative adress to this component-html-template
                  styleUrls: ['./app.component.css']
                })
  template
        - =the html for each component (i.e. html + some differences)
        - describes how the component is rendered on the page
        - have a specific syntax
                - no script element in html tags
                - no bodies, header ...
                - interpolation + template expressions = calculation of html-attribute-string-values via ... e.g. component
                    - syntax: {{ }}
                    - usage: property-binding + template expressions
  dataBinding
        - = combine template (aka html) with ~"dynamic" output of component functions
        - 4 ways + each way has a direction between DOM + Component
                - string interpolation: DOM <- Component; {{ }}; e.g. get string component value
                    to html-template AS CONTENT BETWEEN OPENING- AND CLOSING TAG
                - property binding: DOM <- Component; [property] = value; e.g. read or pull data
                    from target element AS ATTRIBUTE-VALUE OF A HTML-TAG
                - event binding: DOM -> Component; (event) = "event handler"; e.g. mousemovement, keystrokes, ...
                - 2 way data binding: DOM <-> Component; [(ngModel)]; e.g. react to user-input
        - pipes:
                - in view
                - transform input data into output data
                - e.g. {{course.name | uppercase}}
  services
        - = encapsulate processing tasks e.g. fetching data from server, validate user input, logging output to console, ...
        - can be injected into a component (need to use @injectable decorator) -> ng creates application wide
                injector per default
                - provider=object which tells injector how to obtain or create a dependency
                      - provider is often the service class itself
  directives
        - class with the @ directive decorator
        - 3 types
                - components: are directives with a template
                - structural directives: change the DOM layout by adding and removing DOM elements
                      - e.g. ngFor, ngIf
                      - practice: <h2 *ngIf="false">...</h2>, often used with propertyBinding
                      - The * before the attribute selector indicates that a structural directive should be applied instead of a normal attribute directive or property binding. Angular2 internally expands the syntax to an explicit <template> tag.
                          - Structural directives are base on the <template> tag.
                - attribute directive: change the appearance or behavior of an element, component, or another directive
                      - e.g. ngStyle
                      - practice: <p appHighlight>Highlight me!</p>
                      - generation: ng generate directive highlight
                      - own written directives are mostly attribute directive



*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';






import { MaterialModule } from './material/material.module';
import {HomeModule} from "./home/home.module";
// cant be imported into every feature module
// since we define here our singletons
import {CoreModule} from "./core/core.module";
// can be imported into every feature module
// since we dont define singletons here
import {SharedModule} from "./shared/shared.module";
import {AboutModule} from "./about/about.module";
import {LegalNoticeModule} from "./legal-notice/legal-notice.module";
import {AuthModule} from "./auth/auth.module";
import {CanvasModule} from "./canvas/canvas.module";









// Ng-dekorator / Annotations / JavaScript-Features
// contains metadata to classes/properties to set how they are suppose to function
@NgModule({
  // declaration: specify module components: if u create component->specify it here otherwise error
  // declarations are to make directives (including components and pipes) from the current module
  //    available to other directives in the current module. Selectors of directives, components or
  //    pipes are only matched against the HTML if they are declared or imported.
  declarations: [
    AppComponent
  ],

  // get stuff of other modules into this module
  // imports makes the exported declarations of other modules available in the current module
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HomeModule,
    SharedModule,
    AboutModule,
    LegalNoticeModule,
    AuthModule,
    CanvasModule,
    CoreModule
  ],

  // providers are to make services and values known to DI (dependency injection).
  // They are added to the root scope and they are injected to other services or
  // directives that have them as dependency.
  providers: [],

  // specify main component that will be generated by this module
  // this specific (AppComponent) gets injected into index.html
  bootstrap: [AppComponent]


  // exports makes the components, directives, and pipes available in modules that
  // add this module to imports. 
})


export class AppModule {}
