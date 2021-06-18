import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/GlobalVariables';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  array = Array(7);
  
  class =["bar","bar2","bar3","bar4","bar5","bar6","bar7","bar8","bar9","bar10","bar11","bar12","bar13"];
  interval :any;
  scrolled:boolean = false;
  constructor(private variables : GlobalVariables) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.checkUpdate();
      if(this.scrolled){
        clearInterval(this.interval);
        setTimeout(() => {
            for(let i = 0;i<7;i++){
              this.class[i] = this.class[i] + " hiden";
            }
            
          },1000
        
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
