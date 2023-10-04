import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { DishType, Recipe } from 'src/app/model/recipe';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{

  allRecipes: Recipe[] = [];
  recipes: Recipe[] = [];
  selectedCategory: string = '-1';

  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2);

  constructor(private dataServ: DataService){}

  ngOnInit(): void {
    this.dataServ.getAllRecipes().subscribe(recs => {
      this.allRecipes = recs;
      this.recipes = recs;
      console.log(this.recipes)
    })

    console.log(DishType)
    // console.log(Object.entries(DishType))
    // console.log(Object.entries(DishType).slice(Object.entries(DishType).length/2))
  }

  categoryChanged(){
    if(this.selectedCategory === '-1'){
      this.recipes = this.allRecipes;
    } else {
      const categoryNumber = parseInt(this.selectedCategory);
      this.recipes = this.allRecipes.filter(recipe => recipe.category === categoryNumber)
    }
  }

}
