import { Component, OnInit } from '@angular/core';
import { VehicleService, Vehicle } from '../../../core/services/vehicle.service'; // ajusta el path si es necesario
import { CommonModule } from '@angular/common'; // 👈 necesario para *ngFor


@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule], // esto habilita *ngFor y otros como *ngIf
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicleList: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe({
      next: (vehicles) => {
        this.vehicleList = vehicles;
        console.log('Vehículos cargados:', vehicles);
      },
      error: (error) => {
        console.error('Error al obtener los vehículos:', error);
      }
    });
  }
}

