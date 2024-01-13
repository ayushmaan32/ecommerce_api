import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  sku: string;

  @Prop({ default: 0 })
  additionalCost: number;

  @Prop({ default: 0 })
  stockCount: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
