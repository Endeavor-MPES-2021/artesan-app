import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AccountService } from '../../services/auth/account.service';
import { LoginService } from '../../services/login/login.service';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-craftwork',
  templateUrl: 'craftwork.page.html',
  styleUrls: ['craftwork.page.scss'],
})
export class CraftworkPage implements OnInit {
  obra: {};

  constructor(public router: Router, public navController: NavController,
              private apiService: ApiService) {

    if (router.getCurrentNavigation().extras.state) {
      const predictionResult = this.router.getCurrentNavigation().extras.state;
      this.obra = predictionResult;

    }
  }

  ngOnInit() {
  }
}
