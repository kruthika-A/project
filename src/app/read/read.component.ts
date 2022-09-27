import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  data: any;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getall().subscribe((res:any)=>{
      console.log('kkkkkkk',res);
      this.data=res
      console.log(this.data,'dataaaaaaaaaaaaaa')

    })
  }

  

}
