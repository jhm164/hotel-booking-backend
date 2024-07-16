"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hotelModel_1 = __importDefault(require("./hotelModel"));
const resolvers = {
    Query: {
        hotels: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const hotels = yield hotelModel_1.default.find();
                // const hotelsWithReviews = await Promise.all(
                //   hotels.map(async (hotel:any) => {
                //   //  console.log("hotels=",hotels)
                //     const reviews = await Review.find({ hotel_id: hotel._id });
                //     //console.log("reviews=",reviews)
                //     return { ...hotel.toObject(), reviews };
                //   })
                // );
                // console.log("reviews=",hotelsWithReviews)
                return hotels;
            }
            catch (error) {
                throw new Error('Error fetching hotels');
            }
        })
    }
};
exports.default = resolvers;
