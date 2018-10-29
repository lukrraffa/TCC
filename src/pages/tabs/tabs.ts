import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HumorPage } from '../humor/humor';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { HistoricoPage } from '../historico/historico';
import { EditarContaPage } from '../editar-conta/editar-conta';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HumorPage;
  tab5Root = MenuPrincipalPage;
  tab6Root = HistoricoPage;
  tab7Root = EditarContaPage;

  constructor() {

  }
}
