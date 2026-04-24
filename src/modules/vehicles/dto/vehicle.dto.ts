import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVehicleDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  model_id: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  vin: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  year?: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  color: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  mileage?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  price: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  status: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}
