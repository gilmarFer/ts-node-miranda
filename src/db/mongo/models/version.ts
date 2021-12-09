/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

export interface IVersion extends mongoose.Document {
  version: number;
}

export const VersionSchema = new mongoose.Schema({
  version: { type: Number, required: true },
});

const Version = mongoose.model<IVersion>('Version', VersionSchema);
export default Version;
