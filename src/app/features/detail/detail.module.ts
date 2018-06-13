import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './containers/detail/detail.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { UserProfilComponent } from './containers/user-profil/user-profil.component';

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    DetailRoutingModule
  ],
  entryComponents: [UserProfilComponent],
  declarations: [DetailComponent, UserProfilComponent]
})
export class DetailModule { }
