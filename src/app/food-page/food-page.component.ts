import { Component, OnInit } from '@angular/core';
import {Food} from "../Models/Food";
import {FoodService} from "../Services/Food/food.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food ;
  constructor(private foodService:FoodService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if (params['id']){
        this.food = this.foodService.getFoodById(params['id']);
      }
    })
  }

}
