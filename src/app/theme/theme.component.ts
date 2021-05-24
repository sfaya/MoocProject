import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

 selectedOption='';
  isDark=false;
  isLight=true;
  isPinky=false;
  constructor() { }

  ngOnInit(): void {
  }

  applyStyle(){
    if (this.selectedOption == 'dark'){
      this.isDark=true;
      this.isLight=this.isPinky=false;
    }
    else if(this.selectedOption == 'pinky'){
      this.isPinky=true;
      this.isDark=this.isLight=false;
    }
    else{
      this.isLight=true;
      this.isDark=this.isPinky=false;
    }
  }
}
