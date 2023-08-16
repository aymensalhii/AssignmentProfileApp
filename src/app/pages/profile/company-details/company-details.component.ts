import { Component, Input } from '@angular/core';
import { Company } from 'src/app/common/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  @Input() company!: Company | undefined;
}
