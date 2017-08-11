import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
  title: string;
  path: any;
  private subscription: any;
  ngOnInit() {
    this.subscription = this.activatedRoute.params
      .subscribe((path) => {
        this.path = this.route.url;
       // console.log(this.path);
        if(this.path === "/home" || this.path === "/home/history"){
          this.title = 'Home';
        } else if(this.path === "/manual-upload"){
          this.title = 'Manual Item Creation';
        }else if(this.path === "/item-upload"){
          this.title = 'Item Upload';
        }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
