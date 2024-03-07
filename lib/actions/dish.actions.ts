import { connectToDatabase } from "../database";
import Dish from "../database/models/dish.model";


export async function fetchAllDishes() {
    try {
      await connectToDatabase(); // Connect to the database
      const dishes = await Dish.find();
      if(!dishes) throw new Error("dishes not found")
      return JSON.parse(JSON.stringify(dishes));
    } catch (error) {
      console.error('Error fetching dishes:', error);
      return null;
    }
  }
export async function getDishById(dishId: string){
  try {
      await connectToDatabase();

      const dish = await Dish.findById(dishId)
      if (!dish) throw new Error('Dish not found')
      return JSON.parse(JSON.stringify(dish))
  } catch (error) {
    console.error('Error fetching the dish:', error);
      return null;
  }
}
