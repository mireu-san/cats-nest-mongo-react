import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import * as mongoose from 'mongoose';
import { CatsSchema } from './cats.schema';
import { CatsService } from './cats.service';

  
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatsSchema }]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}

