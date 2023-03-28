import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5049/api';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }
}
