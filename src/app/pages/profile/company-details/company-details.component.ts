import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/common/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  @Input() company!: Company | undefined;

  companyForm!: FormGroup;
  
  constructor() {
    this.companyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      bs: new FormControl('', Validators.required),
      catchPhrase: new FormControl('', Validators.required),
    });
  }

  ngOnChanges() {
    this.initForm();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.companyForm.controls['name'].setValue(this.company!.name);
    this.companyForm.controls['bs'].setValue(this.company!.bs);
    this.companyForm.controls['catchPhrase'].setValue(this.company!.catchPhrase);
  }
}
