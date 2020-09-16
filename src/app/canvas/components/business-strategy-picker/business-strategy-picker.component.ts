import { Component, OnInit, Input } from '@angular/core';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';
import { Strategy } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-strategy-picker',
  templateUrl: './business-strategy-picker.component.html',
  styleUrls: ['./business-strategy-picker.component.css']
})
export class BusinessStrategyPickerComponent implements OnInit {

  strategies: Strategy[]
  constructor(private canvasSharedDataService: CanvasSharedDataService)
  {

  }

  ngOnInit(): void
  {
    this.canvasSharedDataService.strategyObservable.subscribe( a => {
      this.strategies = a;
    })
  }

}