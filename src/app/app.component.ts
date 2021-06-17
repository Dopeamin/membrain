import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'membrain';
  class = 'notscrolled';
  first = false;
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
}
