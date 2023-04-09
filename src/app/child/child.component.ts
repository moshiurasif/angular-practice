import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() num= 0;
  @Input() title = '';
  @Output() updateDataValue = new EventEmitter<string>();
  myPro:{user:string, email:string} = {user: '', email: ''};
  myFunc(val:{user:string, email:string}){
      this.myPro = val;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
