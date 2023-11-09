import { Injectable } from '@nestjs/common';
import { CreateBusinessCardDto } from './dto/create-business-card.dto';
import { UpdateBusinessCardDto } from './dto/update-business-card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BusinessCard } from './entities/business-card.schema';
import { Model } from 'mongoose';

@Injectable()
export class BusinessCardsService {

  constructor(@InjectModel(BusinessCard.name) private bcModel: Model<BusinessCard>) {}
  
  create(createBusinessCardDto: CreateBusinessCardDto) {
    const createdBC = new this.bcModel(createBusinessCardDto);
    return createdBC.save();
  }

  findAll() {
    return this.bcModel.find().exec();
  }

  findOne(id: string) {
    return this.bcModel.findById(id).exec();
  }

  update(id: string, updateBusinessCardDto: UpdateBusinessCardDto) {
    return this.bcModel.findByIdAndUpdate(id, updateBusinessCardDto).exec();
  }

  remove(id: string) {
    return this.bcModel.findByIdAndDelete(id).exec();
  }

  async removeAll() {
    return this.bcModel.deleteMany({}).exec();
  }
}
