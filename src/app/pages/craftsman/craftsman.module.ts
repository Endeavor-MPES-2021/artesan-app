import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CraftsmanPage } from './craftsman.page';

const routes: Routes = [
  {
    path: '',
    component: CraftsmanPage,
  },
];

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild(routes), TranslateModule],
  declarations: [CraftsmanPage],
})
export class CraftsmanPageModule {}
