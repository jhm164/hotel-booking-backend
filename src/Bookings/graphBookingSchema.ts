

const typeDefs = `#graphql
    type Payment {
        amount: Float
        payment_date: String
        payment_method: String
        payment_status: String
    }

    type Booking {
        _id: ID
        user_id: ID
        hotel_id: ID
        name: String
        room_type: String
        check_in_date: String
        check_out_date: String
        number_of_guests: Int
        total_price: Float
        booking_status: String
        payment: Payment
    }

    type Query {
        bookings: [Booking]
        booking(id: ID!): Booking
    }

    input PaymentInput {
        amount: Float
        payment_date: String
        payment_method: String
        payment_status: String
    }

    input BookingInput {
        user_id: ID
        hotel_id: ID
        name: String
        room_type: String
        check_in_date: String
        check_out_date: String
        number_of_guests: Int
        total_price: Float
        booking_status: String
        payment: PaymentInput
    }

    type Mutation {
        addBooking( user_id: ID,
        hotel_id: ID,
        name: String,
        room_type: String,
        check_in_date: String,
        check_out_date: String,
        number_of_guests: Int,
        total_price: Float,
        booking_status: String,
        payment: PaymentInput): Booking
        updateBooking(id: ID!, input: BookingInput): Booking
        deleteBooking(id: ID!): Booking
    }
`;

export default typeDefs