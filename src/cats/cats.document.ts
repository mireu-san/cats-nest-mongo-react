import { Document } from 'mongoose';

export interface CatsDocument extends Document {
  name: string;
  age: number;
  breed: string;
}
