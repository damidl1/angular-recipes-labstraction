import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { DishType, Recipe } from 'src/app/model/recipe';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommunicationService } from 'src/app/services/communication.service';


@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent,
    MatGridListModule
  ],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{

  allRecipes: Recipe[] = [];
  recipes: Recipe[] = [];

  // @Input() set selectedCategory(value: number){
  //   if(value === -1){
  //     this.recipes = this.allRecipes;
  //   } else {
  //     this.recipes = this.allRecipes.filter(recipe => recipe.category === value)
  //   }
  // }


  constructor(
    private dataServ: DataService,
    // private commService:CommunicationService
  ){}

  ngOnInit(): void {
    // this.dataServ.getAllRecipes().subscribe(recs => {
    //   this.allRecipes = recs;
    //   this.recipes = recs;
    //   console.log(this.recipes)
    // })
    this.dataServ.recipes.subscribe(recs => this.recipes = recs)

    console.log(DishType)
    // console.log(Object.entries(DishType))
    // console.log(Object.entries(DishType).slice(Object.entries(DishType).length/2))
    // this.commService.selectedCategory.subscribe(cat =>{
    //   if(cat === -1){
    //     this.recipes = this.allRecipes;
    //   } else {
    //     this.recipes = this.allRecipes.filter(recipe => recipe.category === cat)
    //   }
    // })
  }



}
