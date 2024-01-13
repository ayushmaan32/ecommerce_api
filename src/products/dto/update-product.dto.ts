import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: "Additional cost must be a non-negative number" })
  additionalCost?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: "Stock count must be a non-negative number" })
  stockCount?: number;
}
