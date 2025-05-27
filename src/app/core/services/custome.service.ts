import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DriverDto } from '../interfaces/DriverDto';

@Injectable({ providedIn: 'root' })
export class DriverService {
    
    private http = inject(HttpClient);

    getDrivers(estado: string) {
        return this.http.get<DriverDto[]>(`${environment.apiUrl}/filterByStatus/${estado}`);
    }

    createDriver(driver: DriverDto) {
        return this.http.post<DriverDto>(`${environment.apiUrl}/create`, driver);
    }

    updateDriver(id: string, driver: DriverDto) {
        return this.http.patch<DriverDto>(`${environment.apiUrl}/replace/${id}`, driver);
    }

    deleteDriver(id: string) {
        return this.http.delete<DriverDto>(`${environment.apiUrl}/softDelete/${id}`,{});
    }

    restoreDriver(id: string) {
        return this.http.patch<DriverDto>(`${environment.apiUrl}/restore/${id}`,{});
    }

    getFilter(filtro: string) {
        return this.http.get<DriverDto[]>(`${environment.apiUrl}/filterGeneral/${filtro}`);
    }


}