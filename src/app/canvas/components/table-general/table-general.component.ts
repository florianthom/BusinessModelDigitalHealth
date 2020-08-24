import { Component, OnInit } from '@angular/core';
import { Test } from "../../../shared/models/test.model";
import { TestService} from "../../../core/services/test.service";
import {CanvasService} from "@app/core/services/canvas.service";
import { Canvas } from '@app/graphql/generated/graphql';


export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.css']
})
export class TableGeneralComponent implements OnInit {

  canvases : Array<Object> ;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1},
    {text: 'Two', cols: 1, rows: 1},
    {text: 'Three', cols: 1, rows: 1},
    {text: 'Four', cols: 1, rows: 1},
    {text: '5', cols: 1, rows: 1},
    {text: '6', cols: 1, rows: 1},
    {text: '7', cols: 1, rows: 1},
    {text: '8', cols: 1, rows: 1},
    {text: '9', cols: 1, rows: 1},

  ];

  constructor(private canvasService: CanvasService)
  {
    
  }


  

  ngOnInit()
  {
    // this.canvasService.getAllCanvases().subscribe(incommingData => {this.canvases = incommingData});
  }

}
