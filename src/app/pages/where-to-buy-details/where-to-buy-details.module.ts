import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { WhereToBuyDetailsPage } from './where-to-buy-details.page';
import { UserRouteAccessService } from '../../services/auth/user-route-access.service';

const routes: Routes = [
  {
    path: '',
    component: WhereToBuyDetailsPage,
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild(routes), TranslateModule],
  declarations: [WhereToBuyDetailsPage],
})
export class WhereToBuyDetailsPageModule {}
