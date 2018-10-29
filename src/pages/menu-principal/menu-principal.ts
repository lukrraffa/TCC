import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HumorPage} from  '../humor/humor';
import { HistoricoPage} from  '../historico/historico';
import { RespiracaoPage} from  '../respiracao/respiracao';
import { EditarContaPage} from  '../editar-conta/editar-conta';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the MenuPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {
  
  rootpage = HomePage; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPrincipalPage');
 
  }

  home()
  {
        
    this.navCtrl.push(HomePage);

  }

  humor()
  {
    //Alert
    const confirm = this.alertCtrl.create({
      title: 'Olá {{}}, se sente melhor?',
      message: 'Você já definiu o seu humor diário. Deseja alterar? Se for para pior pense melhor :) ',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Quero alterar',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(HumorPage);
          }
        }
      ]
    });
    confirm.present();

  //
  //  this.navCtrl.push(HumorPage);
  }

  historico()
  {
    this.navCtrl.push(HistoricoPage);
  }

  respiracao()
  {
    this.navCtrl.push(RespiracaoPage);
  }

  editarConta()
  {
    this.navCtrl.push(EditarContaPage);
  }

 

}
