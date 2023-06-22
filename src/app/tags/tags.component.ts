import { Component, OnInit } from '@angular/core';
import {Tag} from "../Models/Tag";
import {FoodService} from "../Services/Food/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }

}
