import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  
  positionX = 0;
  direction = 0;
  skewed = false;
  ngOnInit(): void {
    setInterval(() => {
      this.skewed = false;
    },500);
  }
  onMouseWheel(event:any){
    if(event.deltaY>0){
      this.direction=4;
    }else{
      this.direction=-4;
    }
    this.skewed = true;
    if(this.positionX<=0){
      this.positionX -= event.deltaY*1.5;
    }else{
      this.positionX = 0;
    }
    
    console.log(event.deltaY)
  }
}
