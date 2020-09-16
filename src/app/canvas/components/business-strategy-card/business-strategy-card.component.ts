import { Component, OnInit, Input } from '@angular/core';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';
import { Strategy } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-strategy-card',
  templateUrl: './business-strategy-card.component.html',
  styleUrls: ['./business-strategy-card.component.css']
})
export class BusinessStrategyCardComponent implements OnInit
{

  @Input()
  strategy: Strategy

  currentBaseStrategy: Strategy

  constructor(private canvasSharedDataService: CanvasSharedDataService)
  {

  }

  ngOnInit(): void
  {
    this.canvasSharedDataService.currentBaseStrategyObservable.subscribe( a => {
      this.currentBaseStrategy = a;
    })
  }

  selectBaseBusinessStrategy(strategy: Strategy): void
  {
    this.canvasSharedDataService.updateBaseStrategy(this.currentBaseStrategy != null && strategy.id == this.currentBaseStrategy.id ? null : strategy);
  }

  addStrategyToCurrentStrategy(strategy: Strategy)
  {
    this.canvasSharedDataService.updateCurrentStrategy(strategy);
  }

}
