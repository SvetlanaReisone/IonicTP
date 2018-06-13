import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabOneRoutingModule } from './tab-one-routing.module';
import { TabOneComponent } from './containers/tab-one/tab-one.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    TabOneRoutingModule
  ],
  declarations: [TabOneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabOneModule { }
