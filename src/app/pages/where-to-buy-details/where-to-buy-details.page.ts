import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AccountService } from '../../services/auth/account.service';
import { LoginService } from '../../services/login/login.service';
import { ApiService } from '../../services/api/api.service';
import { Predicao } from '../../../model/predicao.model';
import { Lojista } from '../../../model/lojista.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-where-to-buy-details',
  templateUrl: 'where-to-buy-details.page.html',
  styleUrls: ['where-to-buy-details.page.scss'],
})
export class WhereToBuyDetailsPage implements OnInit {
  lojista: Lojista;

  constructor(public router: Router, public navController: NavController,
              private apiService: ApiService, private iab: InAppBrowser) {

    if (router.getCurrentNavigation().extras.state) {
      this.lojista = this.router.getCurrentNavigation().extras.state.lojista;
    }

    const browser = this.iab.create('https://ionicframework.com/');
  }

  ngOnInit() {
  }
}
