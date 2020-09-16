import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '@app/core/services/authorization.service';
import { TitleService } from '@app/core/services/title.service';
import { User } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = null;

  constructor(private authorizationService: AuthorizationService, public titleService: TitleService)
  {

  }

  ngOnInit(): void
  {
    this.authorizationService.userObservable.subscribe( a => {
      this.user = a;
      console.log("jetzt ist user: ");
      console.log(this.user);
    })
  }

}
