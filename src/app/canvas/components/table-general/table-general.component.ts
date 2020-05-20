import { Component, OnInit } from '@angular/core';
import { Test } from "../../../shared/models/test.model";
import { TestService} from "../../../core/services/test.service";

@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.css']
})
export class TableGeneralComponent implements OnInit {

  testObject : Test;
  
  /* 
  constructor(private testService : TestService) { }
 */

  constructor() { }

  ngOnInit(): void {

    /* 
    this.testService.getExampleData().subscribe(incommingData => {this.testObject = incommingData});
     */

  }

}
