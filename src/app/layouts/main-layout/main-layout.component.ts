import { Component } from '@angular/core';
import { ThemeService } from 'src/app/common/services/theme.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(
    public themeService: ThemeService
  ) {}
}
