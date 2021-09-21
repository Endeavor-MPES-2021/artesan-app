import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CraftworkPage } from './craftwork.page';

const routes: Routes = [
  {
    path: '',
    component: CraftworkPage,
  },
];

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild(routes), TranslateModule],
  declarations: [CraftworkPage],
})
export class CraftworkPageModule {}
