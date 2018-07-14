import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';
/**
 * Generated class for the ConnectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {
  map: typeof MapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.map = MapPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPage');
  }

}
