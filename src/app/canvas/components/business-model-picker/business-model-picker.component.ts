import { Component, OnInit, Input } from '@angular/core';
import { Pattern } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-model-picker',
  templateUrl: './business-model-picker.component.html',
  styleUrls: ['./business-model-picker.component.css']
})
export class BusinessModelPickerComponent implements OnInit {

  @Input()
  patterns: Pattern[]

  constructor()
  {

  }

  ngOnInit(): void
  {
    
  }

}
