import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input() users:{name: string, email:string} = {name: '', email: ''};
@Output() anotherMethodEvent = new EventEmitter<string>();

loginForm = new FormGroup({
user: new FormControl("",[ Validators.required, Validators.pattern("[a-zA-Z]+$")]),
email: new FormControl("",[ Validators.required, Validators.email]),
password: new FormControl("", [Validators.required, Validators.minLength(5)])
})
loginUser(){
  console.log(this.loginForm.value);
  
}
get user(){
  return this.loginForm.get("user");
}
get email(){
  return this.loginForm.get("email");
}
get password(){
  return this.loginForm.get('password');
}
  constructor() { }

  ngOnInit(): void {
  }

}
