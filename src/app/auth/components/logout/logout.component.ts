import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '@app/core/services/authorization.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit
{

  constructor(private authorizationService: AuthorizationService, private router: Router)
  {

  }

  ngOnInit(): void
  {
    this.authorizationService.logoutUser();
    this.router.navigate(["/home"]);
  }

}
