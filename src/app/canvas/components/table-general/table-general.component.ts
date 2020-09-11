import { Component, OnInit, Input } from '@angular/core';
import { Test } from "../../../shared/models/test.model";
import { TestService} from "../../../core/services/test.service";
import {CanvasService} from "@app/canvas/shared/canvas.service";
import { Canvas, Actor } from '@app/graphql/generated/graphql';
import { CanvasCell } from '@app/shared/models/canvas-cell';
import { Observable } from 'rxjs';
import { Table } from '@app/graphql/generated/graphql';



@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.css']
})
export class TableGeneralComponent implements OnInit {

  canvasCells : Array<CanvasCell>;

  @Input()
  canvas1: Canvas;


  constructor()
  {

  }


  ngOnInit()
  {
    console.log(this.canvas1);
    delete this.canvas1.table_id.__typename;
    const tableOfCanvas = this.canvas1.table_id;
    

    this.canvasCells = new Array<CanvasCell>();
    for(let key in tableOfCanvas)
    {
      let canvasCell: CanvasCell = {name: key.replace("_entry_ids","").replace("_"," "), bulletPointsUser: tableOfCanvas[key]};
      this.canvasCells.push(canvasCell);
    }
  }

}
