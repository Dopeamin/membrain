import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  
  positionX = 0;
  direction = 0;
  number = 1;
  skewed = false;
  ngOnInit(): void {
    setInterval(() => {
      this.skewed = false;
      if(this.positionX<-2400){
        this.number = 4;
      }else if(this.positionX<-1500){
        this.number = 3;
      }else if(this.positionX<-600){
        this.number = 2;
      }else{
        this.number = 1;
      }
    },500);
  }
  onMouseWheel(event:any){
    if(event.deltaY>0){
      this.direction=4;
    }else{
      this.direction=-4;
    }
    this.skewed = true;
    if(this.positionX<=0 && this.positionX>=-3000){
      this.positionX -= event.deltaY*1.5;
    }else if(this.positionX<-3000){
      this.positionX=-3000;
    
    }else{
      this.positionX = 0;
    }
    
    console.log(event.deltaY)
  }
  onClickRight(event:any){
    if(this.positionX>-700){
      this.positionX = -700;
    }else if(this.positionX>-2000){
      this.positionX = -2000;
    }else if(this.positionX>-2800){
      this.positionX = -2800;
    }
  }
  onClickLeft(event:any){
    if(this.positionX<-2800){
      this.positionX=-2800;
    }else if(this.positionX<-2000){
      this.positionX=-2000;
    }else if(this.positionX<-700){
      this.positionX=-700;
    }else{
      this.positionX=0;
    }
  }
}
