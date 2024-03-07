import { PricesProps } from "@/types";
import { Document, Schema, model, models, Model } from "mongoose";

export interface Variant {
    name: string;
    description: string;
    ingredients?: string[];
    price: number;
    prices?: PricesProps[]; 
    image: string; 
}

export interface DishInterface extends Document {
    
    name: string;
    description: string;
    image: string; // Add image property
    default_price: number;
    variants: Variant[];
}

const VariantSchema = new Schema<Variant>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String }],
    price: { type: Number, required: true },
    prices: [{ size: String, price: Number }], 
    image: { type: String, required: true }
});

const DishSchema = new Schema<DishInterface>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    default_price: {type: Number, required: true},
    image: { type: String, required: true }, // Add image property in DishSchema
    variants: [VariantSchema] // Embed the VariantSchema as an array
});

const Dish: Model<DishInterface> = models.Dish || model<DishInterface>("Dish", DishSchema);
export default Dish;
