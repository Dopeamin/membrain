import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariables } from '../GlobalVariables';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() index:number = 0;
  constructor(private variables:GlobalVariables) {
  }

  ngOnInit(): void {
  }
  onHover(event:any){
    this.variables.cursor = "cursoractive";
  }
  onUnHover(event:any){
    this.variables.cursor = "";
  }
}
