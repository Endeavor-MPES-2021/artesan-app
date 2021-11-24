import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/auth/account.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Account } from 'src/model/account.model';
import { Predicao } from '../../../model/predicao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-where-to-buy',
  templateUrl: 'where-to-buy.page.html',
  styleUrls: ['where-to-buy.page.scss'],
})
export class WhereToBuyPage implements OnInit {
  account: Account;
  predicao: Predicao;

  constructor(public router: Router,
              public navController: NavController, private accountService: AccountService,
              private loginService: LoginService) {
    if (router.getCurrentNavigation().extras.state) {
      this.predicao = this.router.getCurrentNavigation().extras.state.predicao;
      console.log(this.predicao);
    }
  }

  ngOnInit() {
    this.accountService.identity().then((account) => {
      if (account === null) {
        this.goBackToHomePage();
      } else {
        this.account = account;
      }
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
    this.goBackToHomePage();
  }

  private goBackToHomePage(): void {
    this.navController.navigateBack('');
  }
}
