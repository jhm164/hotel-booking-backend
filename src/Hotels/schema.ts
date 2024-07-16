import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Amenity {
    type: String!
    description: String!
  }

  type RoomType {
    type: String!
    price_per_night: Float!
    max_occupancy: Int!
  }

  type Review {
    user_id: String!
    hotel_id: String!
    ratings: Float!
    comment: String!
    review_date: String!
  }

 type Hotel {
    id: ID!
    name: String!
    address: String!
    city: String!
    state: String!
    country: String!
    zipcode: String!
    phone: String!
    email: String!
    website: String!
    description: String!
    rating: Float!
    images: [String!]!
    amenities: [Amenity!]!
    room_types: [RoomType!]!
}
  type HotelWithReview {
    id: ID!
    name: String!
    address: String!
    city: String!
    state: String!
    country: String!
    zipcode: String!
    phone: String!
    email: String!
    website: String!
    description: String!
    rating: Float!
    images: [String!]!
    amenities: [Amenity!]!
    room_types: [RoomType!]!
    reviews: [Review!]!
  }

  type Query {
    hotels: [Hotel!]!
    hotelWithReview: [HotelWithReview!]!
    hotel(id: String!): Hotel
   
  }
`;

export default typeDefs;
