import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {

  title = 'Product Brand Page of this Application'
  myArray = [];
  constructor(private obj : ProductServiceService) { }

  ngOnInit() {
  
    return this.obj.getProductBrand().subscribe(response => this.myArray=response);  
  
  
  }

}
