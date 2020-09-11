import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-strategy-card',
  templateUrl: './business-strategy-card.component.html',
  styleUrls: ['./business-strategy-card.component.css']
})
export class BusinessStrategyCardComponent implements OnInit {

  @Input()
  strategy: Strategy

  constructor() { }

  ngOnInit(): void {
  }

}
