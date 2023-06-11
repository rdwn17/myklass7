import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';
ApiServiceService
import { ToastController } from '@ionic/angular';
import { JwtService } from 'src/app/jwt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = {
    nis : '',
    password : ''
  }

  constructor(
    private router : Router,
    private api : ApiServiceService,
    private jwtService: JwtService,
    private toastController : ToastController
  ) { }

  async doLogin() {
    this.api.LoginUser (this.form).subscribe(async (response: any) => {
      const token = response.data.token;
      this.jwtService.saveToken(token);
      localStorage.setItem('token', token);

    const toast = await this.toastController.create({
      message: 'Login berhasil',
      duration: 2000
    });

    toast.present();
      this.router.navigateByUrl('tabs')
    },
    async err => {
      console.error('Gagal login ===> ', err);
      const toast = await this.toastController.create({
        message: 'Login Gagal',
        duration: 2000
      });

      toast.present();
      // this.presentAlert('Gagal Create user', 'Create user gagal. Silahkan cek kembali jaringan internet anda.');
    });
    // localStorage.setItem('username',this.form.username);

    // localStorage.setItem('password',this.form.password);
  }

  ngOnInit() {
  }

}
