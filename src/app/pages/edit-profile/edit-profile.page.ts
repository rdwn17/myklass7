import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  providers:  [MessageService]
})
export class EditProfilePage implements OnInit {

  selectedFile:any = null ;

  form = {
    password : '',
    confirmation_password : ''
  };

  constructor(
    private api : ApiServiceService,
    private router : Router,
    private messageService: MessageService,
    private http : HttpClient,
    private toastController : ToastController
  ) { }

  doChangePassword(){
    this.api.PutChangePassword(this.form)
            .subscribe( async data => {
              // const jsonResponse = JSON.parse(JSON.stringify(data));
              // console.log(jsonResponse.name);
              console.log("Success ==> "+ JSON.stringify(data));
              const toast = await this.toastController.create({
                message: 'Berhasil Merubah Password',
                duration: 2000
              });

              toast.present();
              this.router.navigateByUrl('tabs/profile')
            },
            async err => {
              console.error('Gagal ===> ', err.status);
              const toast = await this.toastController.create({
                message: 'Gagal Merubah Password',
                duration: 2000
              });

              toast.present();
              this.router.navigateByUrl('tabs/profile')

            });
  }
  async onUpdateFoto() {
    if (!this.selectedFile) {
      const toast = await this.toastController.create({
        message: 'Belum memilih foto',
        duration: 2000
      });

      toast.present();
      console.log('Tidak ada file yang dipilih');
      return;
    }
    console.log(this.selectedFile)

    const formData = new FormData();
    formData.append("foto_mus", this.selectedFile);
    this.api.PostUpdateFoto(formData)
      .subscribe(async (data: any) => {
        console.log('Upload success', data);
        const toast = await this.toastController.create({
          message: 'Berhasil Update Foto Profile',
          duration: 2000
        });

        toast.present();
        this.router.navigateByUrl('tabs/profile')
      }, async (error: any) => {
        console.log('Upload error', error);
        const toast = await this.toastController.create({
          message: 'Gagal Update Foto Profile',
          duration: 2000
        });

        toast.present();
        this.router.navigateByUrl('tabs/profile')
      });
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  doBack(){
    this.router.navigateByUrl('tabs/profile')
  }

  ngOnInit() {
  }

}
