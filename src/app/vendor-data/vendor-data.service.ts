import { Injectable } from '@angular/core';
import { VendorData } from './vendor-data';
import { VENDORS } from './vendor';

@Injectable()
export class VendorService {
  getVendors(): VendorData[] {
    return VENDORS;
  }
}
