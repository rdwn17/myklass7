import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiServiceService } from 'src/app/api/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listmateri',
  templateUrl: './listmateri.page.html',
  styleUrls: ['./listmateri.page.scss'],
})
export class ListmateriPage implements OnInit {

  nim: any;
  pemilihans:any;
  token: any;
  DataUser:any;
  id:any;

  constructor(    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private api : ApiServiceService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.nim = param.nim;
      console.log(this.nim);
      this.GetListMateri(this.nim);
    })
  }

  ngOnInit() {

  }

  GetListMateri(nim:any){
    this.api.GetListByMapel(nim).subscribe( (res:any) =>{
      this.DataUser = res['data'];
      console.log('Data User ===>'+JSON.stringify( res['data']) );
    });
  }
  ionViewDidEnter() {
    console.log("jika selesai loading");
    const nim = this.nim
    this.GetListMateri(nim);

  }
  doBack(){
    this.router.navigateByUrl('tabs')
  }



  // async getAllPemilihan() {
  //   const res = await fetch('https://test.jamaahcoding.my.id/api/show-list-materi/7'  , {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     }
  //   });

  //   const json = await res.json();
  //   this.DataUser = json.data;
  // }

  // ionViewDidEnter() {
  //   console.log("jika selesai loading");
  //   this.GetListMateri();
  // }

  // ionViewDidEnter() {
  //   console.log("jika selesai loading");
  //   // this.getAllPemilihan();
  //   this.GetListMateri(1);
  // }



  // ambilMahasiswa(nim : any) {
  // this.api.GetListByMapel(nim).subscribe
  // // ((res: any) =>
  // // {
  // //     console.log('sukses', res);
  // //     // let mahasiswa = res;

  // //     //console.log(mahasiswa);
  // //     // this.nama = mahasiswa.nama;
  // //     // this.alamat = mahasiswa.alamat;
  // //   }, (error: any) => {
  // //     error
  // //     console.log('error', error);
  // //     // alert('gagal ambil data');
  // //   }
  // //   )
  // }

}
