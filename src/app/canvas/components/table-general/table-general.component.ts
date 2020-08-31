import { Component, OnInit } from '@angular/core';
import { Test } from "../../../shared/models/test.model";
import { TestService} from "../../../core/services/test.service";
import {CanvasService} from "@app/core/services/canvas.service";
import { Canvas } from '@app/graphql/generated/graphql';
import { CanvasCell } from '@app/shared/models/canvas-cell';


export interface Note {
  text: string;
  date: string;
}

export interface BulletPoints {
  text: string;
}



@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.css']
})
export class TableGeneralComponent implements OnInit {

  canvas : Array<CanvasCell> = [{name: "Value Propositions"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}, {name: "6"}, {name: "7"}, {name: "8"}, {name: "9"}]


  constructor(private canvasService: CanvasService)
  {
    
  }


  

  ngOnInit()
  {
    // this.canvasService.getAllCanvases().subscribe(incommingData => {this.canvases = incommingData});
  }

}
