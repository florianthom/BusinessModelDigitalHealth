import { Component, OnInit, Input } from '@angular/core';
import { Pattern } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-model-card',
  templateUrl: './business-model-card.component.html',
  styleUrls: ['./business-model-card.component.css']
})
export class BusinessModelCardComponent implements OnInit {

  @Input()
  pattern: Pattern

  constructor()
  {
    
  }

  ngOnInit(): void {
  }

}
