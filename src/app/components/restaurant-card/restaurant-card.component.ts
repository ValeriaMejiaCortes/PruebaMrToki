import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Object;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  getRestaurant(restaurant) {
    const id = restaurant.id;
    this._router.navigate(['products', id])
    console.log("RESTAURANTE ID -> " + id);
  }

}
