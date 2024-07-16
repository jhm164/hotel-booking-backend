import { Review } from "./reviewSchema";

const reviewResolver = {
  Query: {
    getHotelReview: (_: any, params: any) => {
      try {
        let response = Review.find({ hotel_id: params.hotel_id }).exec();

        return response;
      } catch (e) {
        return "Failed to fetch Review";
      }
    },
  },
  Mutation: {
    createReview: async (_: any, params: any) => {
        try {
          let newRecord = new Review({
            hotel_id: params.hotel_id,
            user_id:params.user_id,
            rating: params.rating,
            comment: params.comment,
            review_date: params.review_date,
          });
          newRecord.save();
          return newRecord;
        } catch (error) {
          // console.log(error)
          // You can log the error here if needed
          throw new Error("Failed to add review");
        }
      },
    updateReview: async (_: any, params: any) => {
      try {
        let updateRecords = {
            hotel_id: params.hotel_id,
            user_id:params.user_id,
            rating: params.rating,
            comment: params.comment,
            review_date: params.review_date,
        };

        const user: any = await Review.findOneAndUpdate(
          { _id: params.id },
          { $set: updateRecords },
          { returnOriginal: false }
        );

        if (!user) {
          return "update failed!";
        }
        return updateRecords;
      } catch (error) {
        // console.log(error)
        // You can log the error here if needed
        throw new Error("Failed to updated users");
      }
    },
    deleteReview: async (_: any, { id }: any) => {
      try {
        const user: any = await Review.findByIdAndDelete({ _id: id });

        if (!user) {
          return "deleted failed!";
        }
        return "Record deleted Succssfully!";
      } catch (error) {
        // console.log(error)
        // You can log the error here if needed
        throw new Error("Failed to deleted users");
      }
    },
  },
};

export default reviewResolver;
