import { WithId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export interface IShippingTable {
  name: string;
}

// TODO CRIAR UM HELPER PRA TRANSFORMAR ISSO

export interface IShippingTableGet {
  id: string;
  name: string;
}

const schema = new Schema<IShippingTable>(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc: WithId<IShippingTable>): IShippingTableGet => ({
        id: doc._id.toString(),
        name: doc.name
      })
    }
  }
);

export const ShippingTableSchema = mongoose.model('ShippingTable', schema);
