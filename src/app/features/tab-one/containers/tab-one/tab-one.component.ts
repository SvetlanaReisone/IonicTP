import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { Observable, of, from as fromPromise} from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { LoadingController, AlertController } from '@ionic/angular';

const { Geolocation } = Capacitor.Plugins;

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public coordinates$: Observable<GeolocationPosition>;
  public defaultPos = {latitude: 42, longitude: 2};

  constructor(
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
  ) { }

  ngOnInit() {
    // demarer le loader....
    this._displayLoader()
    .then((loader: any) => {
      // get position
      return this._getCurrentPosition()
        .then(position => {
          // fermer loader + return position
          loader.dismiss();
          return position;
        })
        // if error
        .catch(err => {
          // fermer loader + return NULL
          loader.dismiss();
          return null;
        });
    })
    .then(position => (position instanceof Error) ? this._displayAlert(position.message) : null)
    // do not forget to handle promise rejection
    .catch(err => {
      this._displayAlert(err.message);
    });
  }

  private async _displayLoader() {
    const loading = await this._loadingCtrl.create({
      content: 'Please wait...',
    });
    await loading.present();
    return  loading;
  }

  private async _displayAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this._alertCtrl.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return  alert;
  }

  private async _getCurrentPosition(): Promise<any> {
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition()
    // handle Capacitor Errors
    .catch(err => {
      console.log('ERR', err);
      return new Error(err.message || 'message perso');
    });
    this.coordinates$ = fromPromise(POSITION).pipe(
      switchMap((data: any) => of(data.coords)),
      tap(data => console.log(data))
    );
    return POSITION;
  }

}
