import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Business, BusinessDocument } from './entities/business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { CreateBusinessCardDto } from 'src/business-cards/dto/create-business-card.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name) private businessModel: Model<BusinessDocument>,
  ) {}

  async findAll(): Promise<Business[]> {
    return this.businessModel.find().populate('businessCards');
  }

  create(create: CreateBusinessDto): Promise<Business> {
    const createdBusiness = new this.businessModel(create);
    return createdBusiness.save();
  }
  async addBusinessCard(id: string, bc: CreateBusinessCardDto) {
    const updateBusiness = await this.businessModel.findById(id);
    updateBusiness.businessCards.push(bc);

    return updateBusiness.save();
  }
  async deleteBusinessCard(id: string, bcId: string) {
    const updateBusiness = await this.businessModel.findById(id);

    const filteredBcs = updateBusiness.businessCards.filter(
      (businessCard: any) => {
        return businessCard.toString() !== bcId;
      },
    );
    updateBusiness.businessCards = filteredBcs;

    return updateBusiness.save();
  }
}
