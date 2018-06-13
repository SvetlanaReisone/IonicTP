import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabThreeRoutingModule } from './tab-three-routing.module';
import { TabThreeComponent } from './containers/tab-three/tab-three.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TabThreeRoutingModule
  ],
  declarations: [TabThreeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabThreeModule { }
