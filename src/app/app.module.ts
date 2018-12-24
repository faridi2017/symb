import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SybmmoduleModule } from './sybmmodule/sybmmodule.module';
import { SybmDemoService } from './apiService/sybm-demo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    loadChildren: './sybmmodule/sybmmodule.module#SybmmoduleModule'
  }
 
  //{path: '**', component:LoginComponent}
  // {
  //   path: 'dfgd',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),SybmmoduleModule,HttpClientModule
  ],
  providers: [SybmDemoService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
