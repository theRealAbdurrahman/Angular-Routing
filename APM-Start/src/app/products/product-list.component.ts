import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-list.component.html',
    styleUrls: ['./app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];


    constructor(private productService: ProductService, private route: ActivatedRoute) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.getProducts();
        this.paramsStuff();

    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);

    }
    //TODO: rename this shit later
    paramsStuff() {
        this.route.queryParams.subscribe(params => {
            this.showImage = params['showImage'] === 'true';

            this.listFilter = params['filterBy'] || '';
        }
        )
        this.route.queryParamMap.subscribe(i => console.log('paramMAp', i.get('showImage'))
        )


    }
    ngOnDestroy() {
    }
}
