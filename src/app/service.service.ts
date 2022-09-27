import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  getall(){
    return this.http.get(environment.url+'/user')                  //acts as fetch
 }
 adduser(data:any){
  return this.http.post(environment.url+'/insert',data)             // acts as fetch
 }
//  editUser(id:number){
//   this.route.navigate(['editUser',id]),{relativeTo:this.route}
//  }
}


