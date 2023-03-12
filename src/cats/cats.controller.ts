import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatsSchema } from './cats.schema';
import { Cat } from './cats.interface';

// interface Cat {
//   name: string;
//   age: number;
//   breed: string;
// }

@Controller('cats')
export class CatsController {
  constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catModel.find({}, null, { collation: { locale: 'en_US', strength: 2 } }).exec();
  }
}
