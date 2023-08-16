import { Component, Input } from '@angular/core';
import { Address } from 'src/app/common/models/address';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent {
  @Input() address: Address | undefined;
}
