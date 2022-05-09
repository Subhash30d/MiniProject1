import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {
  user:any;
  isUser:any;
  MenuNames:any;
  isMenu:any;
  MenuList:any;
  checked:any;
  i:any;
  maincompVariable="main"
  constructor() {
    this.user=""
    this.isUser=false;
    this.MenuNames=""
    this.isMenu=false;
    this.MenuList=[]
    
   }
   addName(event: any){
    if(this.user!=""){
      this.user;
      this.isUser=true;
      this.i=0;
    }
  }
   addMenu(){
     if(this.MenuNames!=""){
      this.isMenu=true;
      this.MenuList.push(this.MenuNames);
      console.log(this.MenuList)
     }
   }

   Onselect(){
    
   }
  
   Remove(){
      this.MenuList=[];
   }
  
  ngOnInit(): void {
  }

}
