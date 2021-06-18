import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../GlobalVariables';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {
  class = "";
  interval :any;
  scrolled:boolean = false;
  arrowRight = faArrowRight;
  arrowLeft = faArrowLeft;
  constructor(private variables : GlobalVariables) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.checkUpdate();
      if(this.scrolled){
        clearInterval(this.interval);
        setTimeout(() => {
            this.class="show";
          },1500
        
        )
        
      }
    }, 50);
    if(this.scrolled){
      clearInterval(this.interval);
    }
    
  }
  ngOnDestroy() {
    if (this.interval) {
        clearInterval(this.interval);
    }
 }
 checkUpdate(){
     this.scrolled = this.variables.first;
     console.log(this.scrolled);
 }
 onHover(event:any){
  this.variables.cursor = "cursoractive";
}
onUnHover(event:any){
  this.variables.cursor = "";
}
}
