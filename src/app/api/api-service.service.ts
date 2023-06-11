
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  token:any;

  constructor(
    private http : HttpClient,



  ) { }
  private apiUrl = environment.ApiURL;

  private getToken(): string | null {
    return localStorage.getItem('token');
  }
  GetShowAllMapel(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(environment.ApiURL + '/api/show-all-mapel' , {headers} );
  }

  PostUpdateFoto(formData:any){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(environment.ApiURL + '/api/update-foto', formData ,{headers} );
  }

  GetShowProfile(){
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(environment.ApiURL + '/api/profile' , {headers} );
  }

  PutChangePassword(form : any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.put(environment.ApiURL + '/api/change-password' ,
    {
      "password": form.password ,
      "confirmation_password": form.confirmation_password
    },{headers});
  }

  PostSavePresensi(formData:any){
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(environment.ApiURL + '/api/save-presensi' , formData, {headers});
  }

  GetListByMapel(nim: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(environment.ApiURL + '/api/show-list-materi/' +nim , { headers }
     );
  }

  GetDetailMateri(nim:any){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });


    return this.http.get(environment.ApiURL + '/api/detail-materi/' +nim , { headers }
     );
  }
  GetFileMateri(nim:any){

    const headers = new HttpHeaders({
      'Content-Type': 'Blob',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });


    return this.http.get(environment.ApiURL + '/api/detail-materi/' +nim , { headers }
     );
  }

  PostUploadTugas(formData : any){

    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/formdata',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(environment.ApiURL + '/api/upload-tugas' , formData ,{headers});
  }

  GetShowTugas(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(environment.ApiURL + '/api/show-tugas' , {headers} ,
    );
  }

  GetDetailTugas(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(environment.ApiURL + '/api/detail-tugas/' +id , {headers} );
  }

  LoginUser(form : any){
    return this.http.post(environment.ApiURL + '/api/login' ,
    {
      "nis" : form.nis ,
      "password" : form.password
    },
    { responseType: 'json'}

    );
  }
}
