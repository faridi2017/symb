import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SybmmoduleRoutingModule } from './sybmmodule-routing.module';
import { CmpOneComponent } from './cmp-one/cmp-one.component';
import { CmpTwoComponent } from './cmp-two/cmp-two.component';
import { CmpThreeComponent } from './cmp-three/cmp-three.component';
import { CmpFourComponent } from './cmp-four/cmp-four.component';
import { CmpFiveComponent } from './cmp-five/cmp-five.component';
import { CmpSixComponent } from './cmp-six/cmp-six.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SybmmoduleRoutingModule
  ],
  declarations: [CmpOneComponent, CmpTwoComponent, CmpThreeComponent, CmpFourComponent, CmpFiveComponent, CmpSixComponent, NavigationComponent, HomeComponent]
})
export class SybmmoduleModule { }
