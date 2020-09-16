import { Component, OnInit, Input } from '@angular/core';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';
import { Pattern, PatternOrderByInput } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-model-card',
  templateUrl: './business-model-card.component.html',
  styleUrls: ['./business-model-card.component.css']
})
export class BusinessModelCardComponent implements OnInit {

  @Input()
  pattern: Pattern

  currentBasePattern: Pattern;


  constructor(private canvasSharedDataService: CanvasSharedDataService)
  {
    
  }

  ngOnInit(): void
  {
    this.canvasSharedDataService.currentBasePatternObservable.subscribe( a => {
      this.currentBasePattern = a;
    })
  }

  selectBaseBusinessPattern(pattern: Pattern): void
  {
    this.canvasSharedDataService.updateBasePattern(this.currentBasePattern != null && pattern.id == this.currentBasePattern.id ? null : pattern);
  }



  addPatternToCurrentPattern(pattern: Pattern)
  {
    this.canvasSharedDataService.addOneToCurrentPattern(pattern);
  }

  checkIfPatternIsInCurrentPattern(pattern: Pattern)
  {
    return this.currentBasePattern == null ? false : pattern.id == this.currentBasePattern.id;
  }

}
