const graphUserSchema = `#graphql
  scalar EmailAddress
  scalar DOB
  scalar PhoneNumber
  

  type User {
    name: String
    email: EmailAddress
    password:String
    phone: PhoneNumber
    address: String            
    date_of_birth:DOB

  }

  type Query {
    getUsers: [User]!
  }
`;

export default graphUserSchema;
