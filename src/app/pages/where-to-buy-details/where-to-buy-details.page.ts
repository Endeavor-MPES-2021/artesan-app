import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AccountService } from '../../services/auth/account.service';
import { LoginService } from '../../services/login/login.service';
import { ApiService } from '../../services/api/api.service';
import { Predicao } from '../../../model/predicao.model';
import { Lojista } from '../../../model/lojista.model';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-where-to-buy-details',
  templateUrl: 'where-to-buy-details.page.html',
  styleUrls: ['where-to-buy-details.page.scss'],
})
export class WhereToBuyDetailsPage implements OnInit {
  lojista: Lojista;

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };

  constructor(public router: Router, public navController: NavController, private inAppBrowser: InAppBrowser,
              private apiService: ApiService) {

    if (router.getCurrentNavigation().extras.state) {
      this.lojista = this.router.getCurrentNavigation().extras.state.lojista;
    }
  }

  ngOnInit() {
  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    };

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);

    // Inject scripts, css and more with browser.X
  }

  public openWithSystemBrowser(url : string){
    console.log(url);
    let target = "_system";
    this.inAppBrowser.create(url,target,this.options);
  }
  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.inAppBrowser.create(url,target,this.options);
  }
  public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.inAppBrowser.create(url,target,this.options);
  }
}
