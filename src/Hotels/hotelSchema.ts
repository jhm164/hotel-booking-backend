const typeDefs = `#graphql
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


  input AmenityInput {
  type: String!
  description: String
}

input RoomTypeInput {
  type: String!
  price_per_night: Float!
  max_occupancy: Int!
}

input ReviewInput {
  user_id: String!
  hotel_id: String!
  ratings: Float!
  comment: String!
  review_date: String!
}

  type Query {
    hotels: [Hotel!]!
    hotelWithReview: [HotelWithReview!]!
    hotel(id: String!): Hotel
   
  }

  

  type Mutation {
    addHotel(
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
      amenities: [AmenityInput!]!
      room_types: [RoomTypeInput!]!
      reviews: [ReviewInput]
    ): Hotel


    updateHotel(
      id:String,
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
      amenities: [AmenityInput!]!
      room_types: [RoomTypeInput!]!
      reviews: [ReviewInput]
    ): Hotel


    deleteHotel(id: ID!): Hotel  
  }
  
  



`;

export default typeDefs;
