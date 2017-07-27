import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
// import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service: LoginService) { }
  // constructor (private router: Router) { }
  // login() {
  //   if(!this._service.login(this.user)){
  //     this.errorMsg = 'Failed to login';
  //   }
  // }
  // login(e){
  //   e.preventDefault();
  //   this.router.navigateByUrl('/home');
  // }
  ngOnInit() {
  }

}
