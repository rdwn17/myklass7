import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from 'primeng/api';
import { ToastController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';


@Component({
  selector: 'app-formtugas',
  templateUrl: './formtugas.page.html',
  styleUrls: ['./formtugas.page.scss'],
  providers:  [MessageService]
})
export class FormtugasPage implements OnInit {


  DataUser: any;
  nim:any;
  form = {
    desk : ''
  }
  selectedFile:any = null ;

  constructor(
    private router : Router,


    private api : ApiServiceService,
    private route: ActivatedRoute,
    private toastController : ToastController
  ) {
    this.route.params.subscribe((param: any) => {
      this.nim = param.nim;
      console.log(this.nim);
      this.GetTugas(this.nim);
    });
   }

  GetTugas(nim:any){
    this.api.GetDetailTugas(nim).subscribe((res:any) =>{
      this.DataUser = res['data'];
      console.log('Data User ===>'+JSON.stringify( res['data']) );
      console.log('berhasil')
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

   async onUpload() {
    if (!this.selectedFile) {
      console.log('Tidak ada file yang dipilih');
      return;
    }
    console.log(this.selectedFile)
    console.log(this.nim)
    const formData = new FormData();
    formData.append("id_mt", this.nim);
    formData.append("desk_tj", this.form.desk);
    formData.append("file_tj", this.selectedFile);



    this.api.PostUploadTugas(formData)
      .subscribe(async (data: any) => {
        console.log('Upload success', data);
        const toast = await this.toastController.create({
          message: 'Berhasil mengirim',
          duration: 2000
        });

        toast.present();
        this.router.navigateByUrl('tabs')
      }, async (error: any) => {
        console.log('Upload error', error);
        const toast = await this.toastController.create({
          message: 'Gagal mengirim',
          duration: 2000
        });

        toast.present();
        this.router.navigateByUrl('tabs')
      });
  }

  // doPostTugas(){
  //   this.api.PostUploadTugas(this.file)
  //   .subscribe( data => {
  //     console.log("Success ==> "+ JSON.stringify(data));

  //   },
  //   err => {
  //     console.error('Gagal ===> ', err.status);

  //   });
  // }

  // onFileChange(fileChangeEvent: { target: { file: any[]; }; }){
  //   this.file = fileChangeEvent.target.file[0];
  // }

  // async submitForm() {
  //   let formData = new FormData();
  //   formData.append("id_mt", '"' + this.nim + '"');
  //   formData.append("file_tj", this.file);
  //   formData.append("desk_tj", this.form.desk);



  //   this.http.post("http://test.jamaahcoding.my.id/api/upload-tugas", formData).subscribe((response) =>{
  //     console.log(response);
  //   }
  //   );
  // }

  // onUpload(event : any) {
  //   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  // }

  doBack(){
    this.router.navigateByUrl('tabs')
  }

  ngOnInit() {

  }

}
