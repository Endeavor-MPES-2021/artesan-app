import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/login/login.service';
import { AccountService } from '../../services/auth/account.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  // The account fields for the login form.
  // account: { username: string; password: string; rememberMe: boolean } = {
  //   username: '',
  //   password: '',
  //   rememberMe: false,
  // };

  loginForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    password: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
    rememberMe: [false],
  });

  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public translateService: TranslateService,
    public loginService: LoginService,
    public toastController: ToastController,
    public navController: NavController,
    private fb: FormBuilder,
  private accountService: AccountService
  ) {}

  ngOnInit() {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });

    this.accountService.identity().then((account) => {
      if (account !== null) {
        //this.account = account;
        this.navController.navigateRoot('/tabs');
      }
    });
  }

  ngAfterViewInit(): void {
    // this.username.nativeElement.focus();
  }

  doLogin() {
    this.loginService.login({
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
      rememberMe: this.loginForm.get('rememberMe').value,
    }).then(
      () => {
        this.navController.navigateRoot('/tabs');
      },
      async (err) => {
        // Unable to log in
        //this.loginForm.get('password').value = '';
        const toast = await this.toastController.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'top',
        });
        toast.present();
      }
    );
  }

  private goBackToHomePage(): void {
    this.navController.navigateBack('');
  }
}
