
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreatePetSupplyDto } from './dto/create-pet-supply.dto';
import { PetSuppliesService } from './pet-supplies.service';
import type { PetSupplyEntity } from './pet-supplies.service';

@Controller('pet-supplies')
export class PetSuppliesController {
  constructor(private readonly petSuppliesService: PetSuppliesService) {}

  @Get()
  findAll(): PetSupplyEntity[] {
    return this.petSuppliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): PetSupplyEntity {
    return this.petSuppliesService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreatePetSupplyDto): PetSupplyEntity {
    return this.petSuppliesService.create(createDto);
  }
}
