import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  username:any;
  userage:any;
  userjob:any
  title: any;
  allUsers: any;
  body: any;

  constructor( private service: ServiceService) { }

  ngOnInit(): void {
  }
  addUser(){
    this.service.adduser({name:this.username,age:this.userage,job:this.userjob}).subscribe((newUser)=>{
console.log(newUser);

    })
  
  }
 
}
