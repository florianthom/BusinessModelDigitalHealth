import { Component, OnInit } from '@angular/core';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private canvasSharedDataService: CanvasSharedDataService)
  {

  }

  ngOnInit(): void
  {
    this.canvasSharedDataService.currentBasePatternObservable.subscribe(a => {console.log("pattern?: "); console.log(a)});
  }

}
