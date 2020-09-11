import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-strategy-picker',
  templateUrl: './business-strategy-picker.component.html',
  styleUrls: ['./business-strategy-picker.component.css']
})
export class BusinessStrategyPickerComponent implements OnInit {

  @Input()
  strategies: Strategy[]

  constructor()
  {

  }

  ngOnInit(): void
  {

  }

}