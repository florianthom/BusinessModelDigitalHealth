// root of all components aka root-component

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {UserGqlService} from "@app/core/services/user-gql.service";
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Event } from '@angular/router';

import { TitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  /**
   *
   */
  constructor(public userService: UserGqlService, public titleService: TitleService) {
    //this.userService.logoutUser();
  }

  ngOnInit() {
    this.titleService.boot();
  }

}

