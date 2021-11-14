import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/auth/account.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Account } from 'src/model/account.model';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: 'results.page.html',
  styleUrls: ['results.page.scss'],
})
export class ResultsPage implements OnInit {
  account: Account;
  obras: {};

  constructor(public router: Router, public navController: NavController, private accountService: AccountService,
              private loginService: LoginService) {

    if (router.getCurrentNavigation().extras.state) {
      const predictionResult = this.router.getCurrentNavigation().extras.state;
      this.obras = predictionResult;
    }
  }

  ngOnInit() {}


  logout() {
    this.loginService.logout();
    this.goBackToHomePage();
  }

  private goBackToHomePage(): void {
    this.navController.navigateBack('');
  }

}
