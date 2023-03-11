import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Controller('cats')
export class CatsController {
  constructor(@InjectModel('Cat') private catModel: Model<any>) {}

  @Get()
  async findAll() {
    return await this.catModel.find().exec();
  }
}
