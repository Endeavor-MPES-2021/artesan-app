import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-craftsman',
  templateUrl: 'craftsman.page.html',
  styleUrls: ['craftsman.page.scss'],
})
export class CraftsmanPage implements OnInit {
  obra: {};

  constructor(public router: Router, public navController: NavController,
              private apiService: ApiService) {

    if (router.getCurrentNavigation().extras.state) {
      const predictionResult = this.router.getCurrentNavigation().extras.state;
      this.obra = predictionResult;

    }
  }

  ngOnInit() {}
}
