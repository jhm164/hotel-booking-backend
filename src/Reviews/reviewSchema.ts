
import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  date_of_birth: Date;
}

const reviewSchema: Schema = new Schema({
    user_id: { type: String, required: true },
    hotel_id: { type: String, required: true, unique: true },
    rating: { type: String, required: true },
    comment: { type: String },
    review_date: { type: String }
});

export const Review = mongoose.model<IReview>('Review', reviewSchema);
