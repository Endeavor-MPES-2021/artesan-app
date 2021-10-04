import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'results', loadChildren: './pages/results/results.module#ResultsPageModule' },
  { path: 'where-to-buy', loadChildren: './pages/where-to-buy/where-to-buy.module#WhereToBuyPageModule' },
  { path: 'craftsman', loadChildren: './pages/craftsman/craftsman.module#CraftsmanPageModule' },
  { path: 'craftwork', loadChildren: './pages/craftwork/craftwork.module#CraftworkPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
