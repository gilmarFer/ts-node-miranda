/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

export interface IMiss extends mongoose.Document {
  name: string;
  type: string;
  description: string;
  phone: string;
  email: string;
  channel: string;
  hours: string;
  state: string;
  mimState: string;
  city: string;
  site: string;
  facebook: string;
  instagram: string;
  telegram: string;
  view: string;
  image: string;
  masses: string;
  rosary: string;
  homily: string;
  tags: Array<number>;
}

export const MissSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: false },
  email: { type: String, required: false },
  channel: { type: String, required: true },
  hours: { type: String, required: false },
  state: { type: String, required: false },
  mimState: { type: String, required: false },
  city: { type: String, required: false },
  site: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  telegram: { type: String, required: false },
  view: { type: String, required: false },
  image: { type: String, required: false },
  masses: { type: String, required: false },
  rosary: { type: String, required: false },
  homily: { type: String, required: false },
  tags: { type: Array, required: true },
});

const Miss = mongoose.model<IMiss>('Miss', MissSchema);
export default Miss;
