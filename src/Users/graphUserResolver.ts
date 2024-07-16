import {
  DateTimeResolver,
  EmailAddressResolver,
  PhoneNumberResolver,
} from "graphql-scalars";
import { User } from "./userModel";

const userReducer = {
  DOB: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  PhoneNumber: PhoneNumberResolver,
  Query: {
    getUser: async (_: any, params: any) => {
      // console.log("id=",params)
      try {
        const users: any = await User.findById(params.id).exec();
        if (!users || users.length === 0) {
          throw new Error("No users found");
        }
        console.log("users=", users);
        return users;
      } catch (error) {
        // console.log(error)
        // You can log the error here if needed
        throw new Error("Failed to fetch users");
      }
    },
  },
  Mutation: {
    createUser: async (_: any, params: any) => {
      try {
        let newRecord = new User({
          name: params.name,
          email: params.email,
          password: params.password,
          phone: params.phone,
          address: params.address,
          date_of_birth: params.date_of_birth,
        });
        newRecord.save();
        return "Record added Succssfully!";
      } catch (error) {
        // console.log(error)
        // You can log the error here if needed
        throw new Error("Failed to add users");
      }
    },
    updateUser: async (_: any, params: any) => {
      try {
        let updateRecords = {
          name: params.name,
          email: params.email,
          password: params.password,
          phone: params.phone,
          address: params.address,
          date_of_birth: params.date_of_birth,
        };

        const user: any = await User.findOneAndUpdate(
          { _id: params.id },
          { $set: updateRecords },
          { returnOriginal: false }
        );

        if (!user) {
          return "update failed!";
        }
        return "Record updated Succssfully!";
      } catch (error) {
        // console.log(error)
        // You can log the error here if needed
        throw new Error("Failed to updated users");
      }
    },
    deleteUser: async (_: any, params: any) => {
      try {
        const user: any = await User.findByIdAndDelete({ _id: params.id });

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

export default userReducer;
