import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage} from  '../home/home';
import { IntroPage} from  '../intro/intro';

/**
 * Generated class for the HumorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-humor',
  templateUrl: 'humor.html',
})
export class HumorPage {

  public nome_usuario:string = "Lucas Rafael";


//Teste da função soma dois 
/*
  public somadedois(x:number, y:number):void{
    alert(x + y);
  }
*/

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HumorPage');

    //Teste da função soma dois
   // this.somadedois(5,5);
    }

    feliz()
  {
    this.navCtrl.push(IntroPage);
  }

  bem()
  {
    this.navCtrl.push(IntroPage);
  }

  neutro()
  {
    this.navCtrl.push(IntroPage);
  }

  triste()
  {
    this.navCtrl.push(IntroPage);
  }

  raiva()
  {
    this.navCtrl.push(IntroPage);
  }

  muitoTriste()
  {
    this.navCtrl.push(IntroPage);
  }
}


