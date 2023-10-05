import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { DishType, Recipe } from 'src/app/model/recipe';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommunicationService } from 'src/app/services/communication.service';
import { BreakpointObserver, BreakpointState, Breakpoints, LayoutModule } from '@angular/cdk/layout';


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
  columns = 4;

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
    private bObserver: BreakpointObserver
  ){}

  ngOnInit(): void {
    this.bObserver
      .observe([
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
        Breakpoints.Medium
      ])
      .subscribe((state: BreakpointState) => {
        if(state.matches === true){
          if(state.breakpoints[Breakpoints.HandsetPortrait]){
            this.columns = 1;
          } else if (state.breakpoints[Breakpoints.TabletPortrait]){
            this.columns = 2;
          } else{
            this.columns = 4
          }
        }
      });
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
