import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Route } from '@angular/router';

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
  userId:any
  // allUsers: any;
  body: any;
  update:any=false;
  changingname:any='submit'


  constructor( private service: ServiceService,private aRoute:ActivatedRoute,private router:Route) 
  {
//     aRoute.queryParams.subscribe((params: any) =>{
//       this.userId=params['userId']
     
// this.service.getId( this.userId ).subscribe((res: any) => {
// // console.log(res, 'respone')
// this.update=true;
// this.changingname='update';
// this.userId = res[0].id;
// this.username= res[0].name ;
// this.userage = res[0].age;this.userjob = res[0].job;
// })
//     })
  }

  ngOnInit(): void {
  }
  addUser(){
    if(this.update==false){
    this.service.addinguser({name:this.username,age:this.userage,job:this.userjob}).subscribe((newUser)=>{
console.log(newUser);
   
    })  }else{

      this.service.addinguser({name:this.username,age:this.userage,job:this.userjob}).subscribe((newUser)=>{
        console.log(newUser);
   
      })  }
    }
 }



 

