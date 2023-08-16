import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/common/models/address';
@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent {
  @Input() address: Address | undefined;

  @ViewChild('map') public mapEl!: ElementRef<HTMLElement>;

  public map!: google.maps.Map;
  marker: any;

  addressForm: FormGroup;

  constructor() {
    this.addressForm = new FormGroup({
      street: new FormControl('', Validators.required),
      suite: new FormControl(''),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
    });
  }

  ngOnChanges() {
    this.initForm();
    this.createMap();
  }

  ngOnInit(): void {
    this.initForm();
    setTimeout(async () => {
      await this.createMap();
    }, 500);
  }

  initForm() {
    this.addressForm.controls['street'].setValue(this.address!.street);
    this.addressForm.controls['suite'].setValue(this.address!.suite);
    this.addressForm.controls['city'].setValue(this.address!.city);
    this.addressForm.controls['zipcode'].setValue(this.address!.zipcode);
  }

  private async createMap(): Promise<void> {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: parseInt(this.address?.geo.lat!), lng: parseInt(this.address?.geo.lng!) }, // San Francisco coordinates
      zoom: 2,
      streetViewControl: false,
      mapTypeControl: false
    };

    if(this.mapEl) {
      this.map = new google.maps.Map(this.mapEl.nativeElement, mapOptions); 
    }

    const marker = new google.maps.Marker({
      position: { lat: parseInt(this.address?.geo.lat!), lng: parseInt(this.address?.geo.lng!) }, // Marker position
      map: this.map,
      title: 'Marker Title'
      
    });
  }
}
