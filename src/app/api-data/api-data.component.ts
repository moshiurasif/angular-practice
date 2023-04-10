import { Component, OnInit } from '@angular/core';
import { ApiloadService } from '../services/apiload.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
usersData:any = [];
  constructor(private val:ApiloadService) { 
    val.loadData().subscribe(data => 
      this.usersData = data)
  }
  myFormData(data:any){
    this.val.postData(data).subscribe(res => console.log(res)
    )
    
    
  }


  ngOnInit(): void {
  }

}
