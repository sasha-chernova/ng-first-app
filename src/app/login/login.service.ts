import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { User } from './login';

@Injectable()
export class LoginService {

  constructor(private _router: Router){}
  // login(user) {
  //   e.preventDefault();
  //   this._router.navigateByUrl('/home');
  //   console.log('hi');
  // }

//   logout() {
//     localStorage.removeItem('user');
//     this._router.navigate(['Login']);
//   }
//
  private users: User[] = [
  new User('admin@gmail.com', '11111'),
  new User('user@gmail.com', '11111')
];

  login(user) {
    const authenticatedUser = this.users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['/home']);
      return true;
    }
    return false;

  }
  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
  }

}
