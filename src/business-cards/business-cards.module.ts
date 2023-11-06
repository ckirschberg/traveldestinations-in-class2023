import { Module } from '@nestjs/common';
import { BusinessCardsService } from './business-cards.service';
import { BusinessCardsController } from './business-cards.controller';
import { BusinessCard, BusinessCardSchema } from './entities/business-card.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: BusinessCard.name, schema: BusinessCardSchema }])],
  controllers: [BusinessCardsController],
  providers: [BusinessCardsService],
})
export class BusinessCardsModule {}
