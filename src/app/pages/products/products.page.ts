import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products;
  categories;
  img;

  slideOpts = {
    speed: 400,
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 2,
  };


  constructor(
    private _ac: ActivatedRoute,
    private _api: ApiServiceService
  ) { }

  ngOnInit() {
    this._ac.paramMap
      .pipe(
        //request
        switchMap((params: ParamMap) => this._api.getProducts(params.get('id')))
      )
      .subscribe((product) => {
        this.categories = product['categories'];
        this.getProducts(this.categories);
        console.dir(this.categories);
        this.getImg(this.categories);
      })

  }


  getProducts(categories) {
    this.products = categories[0]['products'];
  }

  getImg(product) {
    let variab;
    let variabl;
    //Primera posicion, categorias. segunda productos
    variabl = product[0]['products'][0]['image']['url'];
    variab = product;
    variab = variab[0];
    variab = variab['products'];
    variab = variab[0];
    variab = variab['image'];
    variab = variab['url'];
  }

}
