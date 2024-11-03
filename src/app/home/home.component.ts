import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  array: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getPosts().subscribe({
      next: (data: any) => {
        this.array = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
