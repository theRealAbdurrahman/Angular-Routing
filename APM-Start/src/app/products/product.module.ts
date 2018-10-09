import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductEditComponent } from "./product-edit.component";

import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductService } from "./product.service";

import { SharedModule } from "../shared/shared.module";
import { ProductResolver } from "./product-resolver.service";
import { ProductEditInfoComponent } from "./product-edit-info.component";
import { ProductEditTagsComponent } from "./product-edit-tags.component";

const routes: Routes = [
  {
    path: "products",
    children: [
      { path: "", component: ProductListComponent },
      {
        path: ":id",
        component: ProductDetailComponent,
        resolve: { product: ProductResolver }
      },
      {
        path: ":id/edit",
        component: ProductEditComponent,
        resolve: { product: ProductResolver },
        children: [
          { path: "", redirectTo: "info", pathMatch: "full" },
          { path: "info", component: ProductEditInfoComponent },
          { path: "tags", component: ProductEditTagsComponent }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe,
    ProductEditTagsComponent,
    ProductEditInfoComponent
  ],
  providers: [ProductService, ProductResolver]
})
export class ProductModule {}
