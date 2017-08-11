import { Component, OnInit } from '@angular/core';
import { VendorData } from './vendor-data';
import { VendorService } from './vendor-data.service';

@Component({
  selector: 'app-vendor-data',
  templateUrl: './vendor-data.component.html',
  styleUrls: ['./vendor-data.component.css']
})
export class VendorDataComponent implements OnInit {
  vendors: VendorData[];
  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.vendors = this.vendorService.getVendors();
  }

}
