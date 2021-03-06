import { Component, HostListener} from '@angular/core';
import { GlobalVariables } from './GlobalVariables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'membrain';
  class = 'notscrolled';
  first = false;
  x:number;
  y:number;
  interval:any;
  cursor:string;
  constructor(private variables: GlobalVariables) {
    this.x = 0;
    this.y = 0;
    this.cursor = this.variables.cursor
  }
  ngOnInit(){
    this.interval = setInterval(() => {
         this.checkUpdate();
     }, 50);
    }
 
  ngOnDestroy() {
     if (this.interval) {
         clearInterval(this.interval);
     }
  }
  checkUpdate(){
      this.cursor = this.getVariables();
  }
  getVariables():string{
    return this.variables.cursor;
  }
  onMouseWheel(event:any){
    if (event.deltaY > 0 && !this.first){
      this.class="scrolled";
      this.first=true;
      this.variables.first=true;
    }else if(event.deltaY > 0){
      //goes right

    
    }else if (event.deltaY < 0){
      //goes left
    }
    
  }

    @HostListener('document:mousemove', ['$event']) 
    onMouseMove(e:any) {
      this.x = e.clientX-10;
      this.y = e.clientY-10;
    }
}
