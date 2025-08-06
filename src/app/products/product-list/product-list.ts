import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgxPaginationModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  loading = true;
  error = '';
  searchText: string = '';
  p: number = 1;  // ✅ current page number

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: data => { this.products = data; this.loading = false; },
      error: () => { this.error = 'Failed to load products'; this.loading = false; }
    });
  }

  // ✅ Local filter
  get filteredProducts() {
    return this.products.filter(p =>
      p.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
