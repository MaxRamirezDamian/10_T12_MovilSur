import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
  vehicleId: string;
  driverId?: string;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  vehiclePhoto?: string;
  seatCount: number;
  vehicleStatus: string;
  status: string;
  registrationDate: string;
  vehicleType: string;
  fuelType: string;
}


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl = 'http://localhost:8080/v1/api/vehicle';

  constructor(private http: HttpClient) {}

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/listAll`);
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/get/${id}`);
  }

  getVehiclesByDriver(driverId: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/listByDriver/${driverId}`);
  }

  getVehiclesByStatus(status: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/listByStatus?status=${status}`);
  }

  getVehiclesByVehicleStatus(vehicleStatus: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/listByVehicleStatus?vehicleStatus=${vehicleStatus}`);
  }
}

