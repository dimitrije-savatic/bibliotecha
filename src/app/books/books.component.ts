import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: any[] = [];

  ngOnInit(): void {
    this.productService.getPosts().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  constructor(private productService: ProductsService) {}
}
