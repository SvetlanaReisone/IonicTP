import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TabTwoRoutingModule } from './tab-two-routing.module';
import { TabTwoComponent } from './containers/tab-two/tab-two.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    TabTwoRoutingModule
  ],
  declarations: [TabTwoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabTwoModule { }
