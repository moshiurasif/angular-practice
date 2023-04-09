import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  list:any[] = []; 
  addTodo(val:any){
    this.list.push({id: this.list.length, name:val});
  }
  removeTask(id:number){
    this.list = this.list.filter(item => item.id !== id)
  }
  data = 10;
  userDetails = [
    {name: "Asif", email: "asif2212@gmail.com"},
    {name: "Abrar", email: "abrar2212@gmail.com"},
    {name: "Anaf", email: "anaf2212@gmail.com"},
  ];
  dataItem:string = "";
  updateData(item:string){
    console.log(item);
    this.dataItem = item;
    
  }
  valueData:string = "";

  anotherMethod(val:string){
    console.log(val);
    this.valueData += val;
    
  }
  name:any;
  products:any;
}
