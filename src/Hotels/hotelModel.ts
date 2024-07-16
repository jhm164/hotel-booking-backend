import mongoose, { Schema, Document } from 'mongoose';

interface IAmenity {
  type: string;
  description: string;
}

interface IRoomType {
  type: string;
  price_per_night: number;
  max_occupancy: number;
}

interface IHotel extends Document {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  rating: number;
  images: string[];
  amenities: IAmenity[];
  room_types: IRoomType[];
}

const AmenitySchema: Schema = new Schema({
  type: { type: String, required: true },
  description: { type: String, required: true }
});

const RoomTypeSchema: Schema = new Schema({
  type: { type: String, required: true },
  price_per_night: { type: Number, required: true },
  max_occupancy: { type: Number, required: true }
});

const HotelSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  images: { type: [String], default: [] },
  amenities: { type: [AmenitySchema], required: true },
  room_types: { type: [RoomTypeSchema], required: true }
});

const Hotel = mongoose.model<IHotel>('hotels', HotelSchema);
export default Hotel;
