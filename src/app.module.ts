
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetSuppliesModule } from './pet-supplies/pet-supplies.module';

@Module({
  imports: [PetSuppliesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
