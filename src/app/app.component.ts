import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let product of products">{{ product.name }}</li>
    </ul>
  `
})
export class AppComponent {
  public products: any[] | undefined;

  constructor(private apiService: ApiService) {
    this.apiService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    });
  }
}
