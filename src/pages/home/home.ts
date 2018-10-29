import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPrincipalPage} from  '../menu-principal/menu-principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

  }

  sobre()
  {
    this.navCtrl.push(MenuPrincipalPage);
  }
}
