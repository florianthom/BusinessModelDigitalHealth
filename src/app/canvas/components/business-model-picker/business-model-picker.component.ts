import { Component, OnInit, Input } from '@angular/core';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';
import { Pattern } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-business-model-picker',
  templateUrl: './business-model-picker.component.html',
  styleUrls: ['./business-model-picker.component.css']
})
export class BusinessModelPickerComponent implements OnInit {

  patterns: Pattern[]

  constructor(private canvasSharedDataService: CanvasSharedDataService)
  {

  }

  ngOnInit(): void
  {
    this.canvasSharedDataService.patternObservable.subscribe( a=> {
      this.patterns = a;
    })
  }

}
