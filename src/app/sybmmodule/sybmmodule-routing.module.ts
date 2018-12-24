import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CmpOneComponent } from './cmp-one/cmp-one.component';
import { CmpTwoComponent } from './cmp-two/cmp-two.component';
import { HomeComponent } from './home/home.component';
import { CmpThreeComponent } from './cmp-three/cmp-three.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'',component:NavigationComponent}
      
      
     
      
      //{path: '**', component:LoginComponent}
    ]},
    
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SybmmoduleRoutingModule { }
