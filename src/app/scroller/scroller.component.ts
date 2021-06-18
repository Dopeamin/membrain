import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
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
  @Input() in = 1;
  @Output() clickRight = new EventEmitter();
  constructor(private variables : GlobalVariables) { }
  clickedRight(event:any){
    this.clickRight.emit(event);
  }
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
