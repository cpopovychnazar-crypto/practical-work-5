import { SlugService } from '../shared/slug.service';
import { Injectable, NotFoundException } from '@nestjs/common';

export interface PetSupplyEntity {
  id: number;
  title: string;
  price: number;
  petCategory: string;
  packageWeightKg: number;
  brand: string;
  slug: string;
}

@Injectable()
export class PetSuppliesService {
  constructor(private readonly slugService: SlugService) {}
  private readonly petSupplies: PetSupplyEntity[] = [
    {
      id: 1,
      title: 'Сухий корм для собак',
      price: 850,
      petCategory: 'Собаки',
      packageWeightKg: 10,
      brand: 'Royal Canin',
      slug: 'sukhyi-korm-dlia-sobak',
    },
    {
      id: 2,
      title: 'Корм для котів',
      price: 620,
      petCategory: 'Коти',
      packageWeightKg: 5,
      brand: 'Purina',
      slug: 'korm-dlia-kotiv',
    },
  ];

  findAll(): PetSupplyEntity[] {
    return this.petSupplies;
  }

  findOne(id: number): PetSupplyEntity {
    const petSupply = this.petSupplies.find((item) => item.id === id);

    if (!petSupply) {
      throw new NotFoundException('Товар не знайдено');
    }

    return petSupply;
  }

create(
  data: Omit<PetSupplyEntity, 'id' | 'slug'>,
): PetSupplyEntity {
  const newPetSupply: PetSupplyEntity = {
    id:
      this.petSupplies.length > 0
        ? Math.max(...this.petSupplies.map((item) => item.id)) + 1
        : 1,
    ...data,
    slug: this.slugService.generateSlug(data.title),
  };

  this.petSupplies.push(newPetSupply);
  return newPetSupply;
}
}
