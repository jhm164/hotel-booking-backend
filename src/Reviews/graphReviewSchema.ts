const typeDefs = `#graphql

type Review{
    user_id: String
    hotel_id: String
    rating: Int
    comment: String
    review_date: String

}
type Query{
    getHotelReview(hotel_id:String!):[Review]
}


type Mutation{
    createReview(user_id:String!,hotel_id:String!,rating:Int,comment:String,review_date:String):Review
    updateReview(id:String,user_id:String!,hotel_id:String!,rating:Int,comment:String,review_date:String):Review
    deleteReview(id:String):String
}
`;

export default typeDefs;
