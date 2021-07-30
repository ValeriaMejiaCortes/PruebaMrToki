import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  restaurants;
  limit = '20';
  page = '1';

  constructor(
    private _apiService: ApiServiceService,
    private _ac: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this._ac.paramMap
      .pipe(
        //call apiService getrequest and sent the limit and the page
        switchMap((params: ParamMap) => this._apiService.getRestaurants(this.limit, this.page))
      )
      .subscribe((response) => {
        //assign the all restaurants objects to the class variable restaurants
        this.restaurants = response['branches'];
      })
  }

}
