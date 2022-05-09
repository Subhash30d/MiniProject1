import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  StrawVariable="Strawberry";
  ChocobarVariable="Chocobar"
  VanillaVariable="Vanilla"
  ButterscotchVariable="Butterscotch"
  BlackCurrentVariable="BlackCurrent"
  PistaVariable="Pista"
  user: any;
  NGIFVar : boolean =true;
  errorMessage: any;
  isBoolean: boolean=true;
  MenuItems: any;
  router: any;
  constructor() { 
     
    }
    navigate(){
      this.router.navigate(['/Strawberry'])  
      
    
  }

}


