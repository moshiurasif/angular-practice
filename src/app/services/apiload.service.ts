import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiloadService {

  constructor(private load:HttpClient) { 
   
  }
  loadData(){
    return this.load.get("http://localhost/hotelbooking/api.php")
  }
  postData(data:any){
    return this.load.post("http://localhost/hotelbooking/api.php", data)
  }
}
