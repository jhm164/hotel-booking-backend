import {
  DateTimeResolver,
  EmailAddressResolver,
  PhoneNumberResolver,
} from "graphql-scalars";
import { User } from "./userModel";
import { error } from "console";

const books = [
  {
    name: "The Awakening",
    email: "s@gmail.com",
  },
];
const userReducer = {
  DOB: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  PhoneNumber: PhoneNumberResolver,
  Query: {
    getUsers: async () => {
        try {
          const users = await User.find();
          if (!users || users.length === 0) {
            throw new Error('No users found');
          }
          return users;
        } catch (error) {
          // You can log the error here if needed
          throw new Error('Failed to fetch users');
        }
      },
  },
};

export default userReducer;
