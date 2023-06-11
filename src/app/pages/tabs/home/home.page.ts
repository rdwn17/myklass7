import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { JwtService } from 'src/app/jwt.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
[x: string]: any;
  public userLatitude: any;
  public userLongitude: any;
  pemilihans: any;
  form:any;
  item:any;

  constructor(
    private router : Router,
    private jwtService: JwtService,
    private api : ApiServiceService,
    private geolocation: Geolocation

    ) { }

    DataUser : any;
    DataTugas: any;

    async getAllPemilihan() {
      const res = await fetch('https://myschool.jamaahcoding.my.id/api/profil', {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });

      const json = await res.json();
      this.item = json.data;
    }
  GetAllMapel(){
    this.api.GetShowAllMapel().subscribe( (res:any) =>{
      this.DataUser = res['data'];
      console.log('Data User ===>'+JSON.stringify( res['data']) );
    });
  }

  GetAllTugas(){
    this.api.GetShowTugas().subscribe( (res:any) =>{
      this.DataTugas = res['data'];
      console.log('Data User ===>'+JSON.stringify( res['data']) );
    });
  }


  async kirimAbsenMasuk(absen:any){


    try {
          const position: Geoposition = await this.geolocation.getCurrentPosition();
          this.userLatitude = position.coords.latitude;
          this.userLongitude = position.coords.longitude;
          console.log('berhasil mendapatkan latitude : '+this.userLatitude);
          console.log('berhasil mendapatkan longitude : '+this.userLongitude);
          console.log(absen);
        } catch (error) {
          console.error('Error saat mendapatkan lokasi', error);
        }
        const formData = new FormData();
        formData.append("status", "MASUK");
        formData.append("latitude", this.userLatitude);
        formData.append("longitude", this.userLongitude);
        console.log(formData);

        this.api.PostSavePresensi(formData).subscribe( data => {
          console.log("Success ==> "+ JSON.stringify(data));

        },
        err => {
          console.error('Gagal ===> ', err.status);

        });

  }

  async kirimAbsenPulang(absen:any){

    try {
          const position: Geoposition = await this.geolocation.getCurrentPosition();
          this.userLatitude = position.coords.latitude;
          this.userLongitude = position.coords.longitude;
          console.log('berhasil mendapatkan latitude : '+this.userLatitude);
          console.log('berhasil mendapatkan longitude : '+this.userLongitude);
          console.log(absen);
          this.form = {
            status :"PULANG",
            latitude : this.userLatitude,
            longitude : this.userLongitude,
          }
        } catch (error) {
          console.error('Error saat mendapatkan lokasi', error);
        }

        this.api.PostSavePresensi(this.form).subscribe( data => {
          console.log("Success ==> "+ JSON.stringify(data));

        },
        err => {
          console.error('Gagal ===> ', err.status);

        });

  }

  checkToken() {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('login');
    }
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.GetAllMapel();
    this.GetAllTugas();
  }

  doLogout()
  {
    this.jwtService.removeToken();
    this.router.navigateByUrl('login');
  }

  ngOnInit() {
    this.checkToken();
    this.GetAllMapel();
    this.GetAllTugas();
    // this.GetAllMapel();
    this.getAllPemilihan();
  }

}
