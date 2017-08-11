import { Component, OnInit, Input } from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  display: boolean = false;
  // @Input title: string = "Home";

  constructor(private router: Router) {
  }
  redirect() {
    this.router.navigate(['./manual-upload']);
  }
  ngOnInit() {
    //this.title = "Home";
  }

  showDialog() {
    this.display = true;
  }
}
