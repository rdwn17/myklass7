import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  item:any;


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
  // GetProfile(){
  //   this.api.GetShowProfile().subscribe( (res:any) =>{
  //     this.item = res['data'];
  //     console.log('Data User ===>'+JSON.stringify( res['data']) );
  //   });
  // }

  constructor(
    private router : Router,
    private api : ApiServiceService,
  ) { }

  EditProfile(){
    this.router.navigateByUrl('edit-profile')
  }
  ngOnInit() {
    this.getAllPemilihan();
    // this.GetProfile();
  }
  doBack(){
    this.router.navigateByUrl('tabs')
  }

}
