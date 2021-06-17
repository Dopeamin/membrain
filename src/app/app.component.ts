import { Component, HostListener} from '@angular/core';
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
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  onMouseWheel(event:any){
    if (event.deltaY > 0 && !this.first){
      this.class="scrolled";
      this.first=true;
    }else if(event.deltaY > 0){
      //goes right

    
    }else if (event.deltaY < 0){
      //goes left
    }
    
  }

    @HostListener('document:mousemove', ['$event']) 
    onMouseMove(e:any) {
      this.x = e.clientX-6;
      this.y = e.clientY-5;
    }
}
