import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  ],
  controllers: [CatsController],
})
export class CatsModule {}

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
