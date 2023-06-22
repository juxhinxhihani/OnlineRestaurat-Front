import { Component, OnInit } from '@angular/core';
import {FoodService} from "../Services/Food/food.service";
import {Food} from "../Models/Food";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}
