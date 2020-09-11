import { Component, OnInit, Input } from '@angular/core';
import { Canvas } from '@app/graphql/generated/graphql';


@Component({
  selector: 'app-canvas-picker-card',
  templateUrl: './canvas-picker-card.component.html',
  styleUrls: ['./canvas-picker-card.component.css']
})
export class CanvasPickerCardComponent implements OnInit {

  @Input()
  canvas: Canvas;

  constructor() { }

  ngOnInit(): void {
  }

}