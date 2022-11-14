import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  constructor(
    private ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.ProductService.getProductList().subscribe(res => this.productList = res);
    console.log(this.productList)
  }

}
