import Hotel from "./hotelModel";

const resolvers = {
  Query: {
    hotels: async () => {
      try {
        const hotels = await Hotel.find();
        console.log("hotels=", hotels);
        return hotels;
      } catch (error) {
        throw new Error("Error fetching hotels");
      }
    },
    hotel: async (_demo: any, { id }: any) => {
      try {
        const hotels = await Hotel.findById(id);
        return hotels;
      } catch (error) {
        throw new Error("Error fetching hotels");
      }
    },
  },

  Mutation: {
    deleteHotel: async (_: any, params: any) => {
      try {
        const hotels = await Hotel.findByIdAndDelete({ _id: params.id });
        return "Record deleted successfully!";
      } catch (error) {
        throw new Error("Error fetching hotels");
      }
    },
    addHotel: async (_: any, params: any) => {
      try {
        console.log("Params:", params);

        // Assuming Hotel is a mongoose model or similar with a save() method
        const hotel = new Hotel(params);
        const savedHotel = await hotel.save();

        console.log("Hotel saved successfully:", savedHotel);
        return savedHotel;
      } catch (error) {
        console.error("Error adding hotel:", error);
        throw new Error("Error adding hotel");
      }
    },
    updateHotel: async (_: any, params: any) => {
      try {
        // Find the hotel by its unique ID and update it
        const updatedHotel = await Hotel.findByIdAndUpdate(params.id, params, {
          new: true,
        });

        if (!updatedHotel) {
          throw new Error("Hotel not found");
        }

        console.log("Hotel updated successfully:", updatedHotel);
        return updatedHotel;
      } catch (error) {
        console.error("Error updating hotel:", error);
        throw new Error("Error updating hotel");
      }
    },
  },
};

export default resolvers;
