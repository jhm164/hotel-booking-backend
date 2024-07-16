import Hotel from './hotelModel';

const resolvers = {
  Query: {
   
    hotels: async () => {
      try {
        const hotels = await Hotel.find();
        
        // const hotelsWithReviews = await Promise.all(
        //   hotels.map(async (hotel:any) => {
        //   //  console.log("hotels=",hotels)
        //     const reviews = await Review.find({ hotel_id: hotel._id });
        //     //console.log("reviews=",reviews)
        //     return { ...hotel.toObject(), reviews };
        //   })
        // );
        console.log("hotels=",hotels)
        return hotels;
      } catch (error) {
        throw new Error('Error fetching hotels');
      }
    },
    hotel: async  (_demo:any, { id }:any) => {
      try {
        console.log("id==",id)
        const hotels = await Hotel.findById(id)
        console.log("hotel information fetched successfully!",hotels)
        return hotels;
      } catch (error) {
        throw new Error('Error fetching hotels');
      }
    }
 
  }
};

export default resolvers;
