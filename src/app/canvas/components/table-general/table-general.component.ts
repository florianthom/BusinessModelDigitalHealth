import { Component, OnInit, Input } from '@angular/core';
import { Canvas, Actor, Pattern } from '@app/graphql/generated/graphql';
import { CanvasCell } from '@app/shared/models/canvas-cell';
import { CanvasSharedDataService } from '@app/canvas/shared/canvas-shared-data.service';



@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.css']
})
export class TableGeneralComponent implements OnInit {

  canvasCells : Array<CanvasCell>;
  canvas: Canvas;
  currentPatterns: Pattern[];


  constructor(private canvasSharedDataService: CanvasSharedDataService)
  {

  }


  ngOnInit()
  {
    this.subscribeCanvasSharedServiceForCurrentCanvas();
    this.subscribeCanvasSharedServiceForCurrentPatterns();
  }

  subscribeCanvasSharedServiceForCurrentCanvas()
  {
    this.canvasSharedDataService.currentCanvasObservable.subscribe( a => {
      this.canvas = a;
      this.renderCanvas();
    })
  }

  subscribeCanvasSharedServiceForCurrentPatterns()
  {
    this.canvasSharedDataService.currentPatternsObservable.subscribe( a => {
      this.currentPatterns = a;
      this.renderCanvas();
    })
  }

  createPatternPropertyNameString(key: String) : string
  {
    let weightPropertyNamePatternTmpList = key.replace("_entry_ids","").split("_")
    if(weightPropertyNamePatternTmpList[1])
    {
      weightPropertyNamePatternTmpList[1] = weightPropertyNamePatternTmpList[1].charAt(0).toUpperCase() + weightPropertyNamePatternTmpList[1].slice(1);
    }
    let weightPropertyNamePattern = weightPropertyNamePatternTmpList.join().replace(",", "") + "Weight";
    return weightPropertyNamePattern;
  }

  renderCanvas()
  {
    if(this.canvas)
    {
      const tableOfCanvas = this.canvas.table_id;
      delete tableOfCanvas.__typename
      this.canvasCells = new Array<CanvasCell>();
      for(let key in tableOfCanvas)
      {
        this.canvasCells.push(
            {
              name: key.replace("_entry_ids","").replace("_"," "),
              bulletPointsUser: tableOfCanvas[key],
              weights: this.currentPatterns?.map( a => a[this.createPatternPropertyNameString(key)])
            }
        );
      }
    }
  }
}
