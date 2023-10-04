export interface Recipe {
  createdAt: number
  name: string
  ingredients: string[]
  description: string
  url: string
  category: DishType
  id?: string,
  rating: number
}

export enum DishType{
  antipasto,
  primo,
  secondo,
  contorno,
  dessert,
  cocktail,
  gelati
}

// export enum DishType{
//   antipasto = 'appetizer',
//   primo = 'first_course',
//   secondo = 'second_course',
//   contorno = 'sidedish',
//   dessert = 'dessert',
//   cocktail = 'cocktail'
// }
