// root of all components aka root-component

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthorizationService } from "@app/core/services/authorization.service";
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

  constructor(public authorizationService: AuthorizationService, public titleService: TitleService) {
    //this.authorizationService.logoutUser();
  }

  ngOnInit() {
    this.titleService.boot();
  }

}

