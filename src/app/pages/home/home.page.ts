import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/auth/account.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Account } from 'src/model/account.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  account: Account;
  cameraOptions1: CameraOptions;
  cameraOptions2: CameraOptions;
  @ViewChild('fileInput', { static: false }) fileInput;


  constructor(public navController: NavController, private accountService: AccountService, private loginService: LoginService, private camera: Camera) {
    // Set the Camera options
    this.cameraOptions1 = {
      quality: 100,
      targetWidth: 900,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      allowEdit: true,
      sourceType: 1,
    };

    this.cameraOptions2 = {
      quality: 100,
      targetWidth: 900,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      allowEdit: true,
      sourceType: 0,
    };
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

  getPicture(fieldName) {
    this.navController.navigateForward('/results');
  }

  getGalery(fieldName) {
    if (Camera.installed()) {
      this.camera.getPicture(this.cameraOptions1).then(
        (data) => {
          this.navController.navigateForward('/results');
        },
        (err) => {
          alert('Erro no carregamento da imagem');
        }
      );
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  setFileData(event, field, isImage) {
    // this.dataUtils.loadFileToForm(event, this.form, field, isImage).subscribe();
    // this.processWebImage(event, field);
    this.navController.navigateForward('/results');
  }
}
