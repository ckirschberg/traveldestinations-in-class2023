import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BusinessCardsModule } from './business-cards/business-cards.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/comwell_test'), CatsModule, AuthModule, UsersModule, BusinessCardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class TestModule {}
