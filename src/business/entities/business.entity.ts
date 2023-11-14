import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { BusinessCard } from 'src/business-cards/entities/business-card.schema';

export type BusinessDocument = Business & Document;

@Schema()
export class Business {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: BusinessCard.name }] })
  businessCards: BusinessCard[]
}

export const BusinessSchema = SchemaFactory.createForClass(Business);
