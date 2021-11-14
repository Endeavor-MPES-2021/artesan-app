import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccountService } from 'src/app/services/auth/account.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Account } from 'src/model/account.model';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { PredicaoService } from '../../services/predicao.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Predicao } from '../../../model/predicao.model';
import { filter, map } from 'rxjs/operators';


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

  form = this.formBuilder.group({
    arquivo: [],
  });

  private loading: HTMLIonLoadingElement;


  constructor(public navController: NavController, private accountService: AccountService,
              private dataUtils: JhiDataUtils,
              protected formBuilder: FormBuilder,
              public loadingController: LoadingController,
              private toastCtrl: ToastController,
              public predicaoService: PredicaoService,
              private loginService: LoginService, private camera: Camera, private apiService: ApiService) {
    // Set the Camera options
    this.cameraOptions1 = {
      quality: 100,
      targetWidth: 900,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // saveToPhotoAlbum: true,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
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
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
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
    if (Camera.installed()) {
      this.camera.getPicture(this.cameraOptions1).then(
        (data) => {
          this.apiService.post('classifyImage', data, { responseType: 'json' as 'json' }).subscribe(
            (resultado) => {
              this.navController.navigateForward('/results', { state: resultado });
            });
        },
        (err) => {
          alert('Erro no carregamento da imagem');
        }
      );
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  getGalery(fieldName) {
    if (Camera.installed()) {
      this.camera.getPicture(this.cameraOptions2).then(
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
    this.presentLoading();
    this.dataUtils.loadFileToForm(event, this.form, field, isImage).subscribe();
    this.form.get("arquivo").valueChanges.subscribe(selectedValue => {

    this.predicaoService
      .classifyImage(selectedValue)
      .pipe(
        filter((response: HttpResponse<Predicao[]>) => response.ok),
        map((obra: HttpResponse<Predicao[]>) => obra.body)
    ).subscribe(
        (response: Predicao[]) => {
          this.dimissLoading();
          this.navController.navigateForward('/results', { state: {predicoes: response} });
        },
        async (error) => {
          console.error(error);
          const toast = await this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
          await toast.present();
        }
      );

      //
      // this.apiService.post('classifyImage', selectedValue, { responseType: 'json' as 'json' }).subscribe(
      //   (resultado) => {
      //     this.dimissLoading();
      //     this.navController.navigateForward('/results', { state: resultado });
      //   });
    });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...'
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async dimissLoading() {
    await this.loading.dismiss();
  }
}
