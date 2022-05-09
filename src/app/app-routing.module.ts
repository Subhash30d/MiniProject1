import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavComponent } from './left-nav/left-nav/left-nav.component';
import { MaincontentComponent } from './Maincontent/maincontent/maincontent.component';

const routes: Routes = [
  {path:'main', component: MaincontentComponent},
  {path:'Strawberry', component: LeftNavComponent},
  {path:'Chocobar', component: LeftNavComponent},
  {path:'Vanilla', component: LeftNavComponent},
  {path:'Butterscotch', component: LeftNavComponent},
  {path:'BlackCurrent', component: LeftNavComponent},
  {path:'Pista', component: LeftNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
