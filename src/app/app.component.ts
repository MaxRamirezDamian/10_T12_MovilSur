import { Component } from '@angular/core';
import { VehicleListComponent } from './feature/vehicle/vehicle-list/vehicle-list.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, VehicleListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud';
}
