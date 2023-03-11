import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.interface';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async create(cat: Cat): Promise<Cat> {
    const newCat = new this.catModel(cat);
    return await newCat.save();
  }

  async update(id: string, cat: Cat): Promise<Cat> {
    return await this.catModel.findByIdAndUpdate(id, cat, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.catModel.findByIdAndRemove(id).exec();
  }
}
