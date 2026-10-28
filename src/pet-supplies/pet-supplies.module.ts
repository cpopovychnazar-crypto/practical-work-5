
import { Module } from '@nestjs/common';
import { PetSuppliesController } from './pet-supplies.controller';
import { PetSuppliesService } from './pet-supplies.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [PetSuppliesController],
  providers: [PetSuppliesService],
})
export class PetSuppliesModule {}
