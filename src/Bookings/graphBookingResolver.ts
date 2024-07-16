import Booking from "./bookingScheam";

const resolvers = {
    Query: {
        bookings: async () => {
            try {
                return await Booking.find({});
            } catch (error) {
                throw new Error('Error fetching bookings');
            }
        },
        booking: async (_:any, { id }:any) => {
            try {
                const booking = await Booking.findById(id);
                if (!booking) throw new Error('Booking not found');
                return booking;
            } catch (error) {
                throw new Error('Error fetching booking');
            }
        }
    },
    Mutation: {
        addBooking: async (_:any, params:any) => {
            try {

                console.log("params = ",params)
                const input:any ={
                    "user_id": params.user_id,  // Reference to Users collection
                    "hotel_id": params.hotel_id,  // Reference to Hotels collection
                    "name": params.name,
                    "room_type": params.room_type,
                    "check_in_date": params.check_in_date,
                    "check_out_date": params.check_out_date,
                    "number_of_guests": params.number_of_guests,
                    "total_price": params.total_price,
                    "booking_status": params.booking_status,
                    "payment": {
                      "amount": params.payment.amount,
                      "payment_date": params.payment.payment_date,
                      "payment_method":params.payment.payment_method,
                      "payment_status": params.payment.payment_status
                    }
                  
                  }
                const newBooking = new Booking(input);
                return await newBooking.save();
            } catch (error) {
                console.log(error)
                throw new Error('Error adding booking');
            }
        },
        updateBooking: async (_:any, { id, input }:any) => {
            try {
                const updatedBooking = await Booking.findByIdAndUpdate(id, input, { new: true });
                if (!updatedBooking) throw new Error('Booking not found');
                return updatedBooking;
            } catch (error) {
                throw new Error('Error updating booking');
            }
        },
        deleteBooking: async (_:any, { id }:any) => {
            try {
                const deletedBooking = await Booking.findByIdAndRemove(id);
                if (!deletedBooking) throw new Error('Booking not found');
                return deletedBooking;
            } catch (error) {
                throw new Error('Error deleting booking');
            }
        }
    }
};

export default resolvers