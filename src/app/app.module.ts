import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HumorPageModule } from '../pages/humor/humor.module';
import { MenuPrincipalPageModule } from '../pages/menu-principal/menu-principal.module';
import { HistoricoPageModule } from '../pages/historico/historico.module';
import { EditarContaPageModule } from '../pages/editar-conta/editar-conta.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { RespiracaoPageModule } from '../pages/respiracao/respiracao.module';
import { IntroPageModule } from '../pages/intro/intro.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HumorPageModule,
    MenuPrincipalPageModule,
    HistoricoPageModule,
    EditarContaPageModule,
    CadastroPageModule,
    RespiracaoPageModule,
    IntroPageModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
