import { Component, OnInit } from '@angular/core';
// import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { User } from './login';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-login',
  providers: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];
  name: string;
  error: boolean;
  loginForm: FormGroup;
  constructor() {
  this.loginForm = new FormGroup({
    email: new FormControl('', Validators.required ),
    password: new FormControl('', Validators.required)
  });
  // this.error = false;
  }
  login(event){
    event.preventDefault();
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.error = false;
      this.name = this.loginForm.value.email;
      console.log(this.loginForm.value);
      this.msgs = [];
      this.msgs.push({severity: 'success', summary: 'Success!', detail: this.name + '\n authentication successful'});
    } else if(this.loginForm.value.email === ''){
      this.error = false;
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Some error occured', detail: 'A username is required'});
    } else if(this.loginForm.value.password === ''){
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Some error occured', detail: 'A password is required'});
      this.error = false;
    } else{
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Some error occured', detail: 'Invalid credentials'});
      this.error = true;
    }
}

  // login(e){
  //   e.preventDefault();
  //   this.router.navigateByUrl('/home');
  // }
  ngOnInit() {

  }

}
