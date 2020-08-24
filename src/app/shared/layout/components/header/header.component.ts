import { Component, OnInit } from '@angular/core';
import { TitleService } from '@app/core/services/title.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public titleService: TitleService) { }

  ngOnInit(): void {
  }

}
