import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        // this.getProduct();
        this.route.data.subscribe(product => this.product = product['product'])
    }

    getProduct() {
        const id = +this.route.snapshot.params['id'];
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
    goBack() {
        this.router.navigate(['/products'], { queryParamsHandling: "preserve" })

    }
}
