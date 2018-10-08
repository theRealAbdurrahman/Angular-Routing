import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

    constructor(private productService: ProductService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.productService.getProduct(route.params.id);
    }
}