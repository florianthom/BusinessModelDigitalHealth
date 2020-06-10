import { Component, OnInit } from '@angular/core';
import { Test } from "../../../shared/models/test.model";
import { TestService} from "../../../core/services/test.service";
import {CanvasService} from "@app/core/services/canvas.service";
import { Canvas } from '@app/graphql/generated/graphql';

@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.css']
})
export class TableGeneralComponent implements OnInit {

  canvases : Array<Object> ;

  constructor(private canvasService: CanvasService)
  {
    
  }


  

  ngOnInit()
  {
    this.canvasService.getAllCanvases().subscribe(incommingData => {this.canvases = incommingData});
  }

}
