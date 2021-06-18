import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../GlobalVariables';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
