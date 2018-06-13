import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-page.routing';
import { IndexPageComponent } from './containers/index-page/index-page.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexPageModule { }
