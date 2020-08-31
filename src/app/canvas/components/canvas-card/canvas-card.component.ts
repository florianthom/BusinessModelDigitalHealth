import { Component, OnInit, Input} from '@angular/core';
import { CanvasCell } from '@app/shared/models/canvas-cell';

@Component({
  selector: 'app-canvas-card',
  templateUrl: './canvas-card.component.html',
  styleUrls: ['./canvas-card.component.css']
})
export class CanvasCardComponent implements OnInit {


  @Input()
  canvasCell : CanvasCell;

  constructor() { }

  ngOnInit(): void {
  }

}
