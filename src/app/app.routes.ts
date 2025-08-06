import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list';
import { ProductDetailComponent } from './products/product-detail/product-detail';
import { CategoryListComponent } from './products/category-list/category-list';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:name', component: ProductListComponent },
  { path: '**', redirectTo: 'products' }   // ✅ Fallback route for invalid URLs
];
