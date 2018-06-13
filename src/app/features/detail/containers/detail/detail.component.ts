import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GenericHttpService } from '../../../../shared/services/generic-http/generic-http.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { UserProfilComponent } from '../user-profil/user-profil.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public post$: Observable<any>;

  constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _http: GenericHttpService,
    private _router: Router,
    private _modalController: ModalController
  ) {
  }

  ngOnInit() {
    console.log(this._route.snapshot.params.id);
    this.post$ = this._http.get('fakeApi', '/posts/' + this._route.snapshot.params.id);
  }

  back() {
    this._router.navigate([{outlet: 'two'}]);
  }

  async goUserProfil(userID: string) {
    console.log('userID', userID);
    const modal = await this._modalController.create({
      component: UserProfilComponent,
      componentProps: {
        user: {
          id: userID
        }
      }
    });
    // check on modal is dismiss
    modal.onDidDismiss(data => this.displayDismissData(data));
    // open modal
    return await modal.present();
  }

  displayDismissData(data) {
    console.log('Modal closing...', data);
  }

}
