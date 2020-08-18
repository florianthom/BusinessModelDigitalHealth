// root of all components aka root-component

import { Component } from '@angular/core';
import {UserGqlService} from "@app/core/services/user-gql.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  /**
   *
   */
  constructor(public userService: UserGqlService) {
    //this.userService.logoutUser();
  }
}

