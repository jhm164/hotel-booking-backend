const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    amount: { type: Number, required: true },
    payment_date: { type: Date, required: true },
    payment_method: { type: String, required: true },
    payment_status: { type: String, required: true }
});

const bookingSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    hotel_id: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
    name: { type: String, required: true },
    room_type: { type: String, required: true },
    check_in_date: { type: Date, required: true },
    check_out_date: { type: Date, required: true },
    number_of_guests: { type: Number, required: true },
    total_price: { type: Number, required: true },
    booking_status: { type: String, required: true },
    payment: { type: paymentSchema, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking
// module.exports = Booking;
