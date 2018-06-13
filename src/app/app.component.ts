import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private menuCtl: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

    });
  }

  menuClose() {
    this.menuCtl.close();
  }
}
