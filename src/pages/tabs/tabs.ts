import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ConnectPage } from '../connect/connect';
import { SettingsPage } from '../settings/settings';
import { MapPage } from '../map/map';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ConnectPage;
  tab5Root = SettingsPage



  constructor() {

  }
}
