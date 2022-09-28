import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  getall(){
    return this.http.get(environment.url+'/user')                  //acts as fetch
 }
 addinguser(data:any){
  return this.http.post(environment.url+'/insert',data)             // acts as fetch
 }
getId(id:any){
  return this.http.get(environment.url+'userId/'+id)
}
}


