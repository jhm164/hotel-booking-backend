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
    getUser(id:String): User!
    
  }

  type Mutation {
    createUser(
    name: String,
    email: EmailAddress,
    password:String,
    phone: PhoneNumber,
    address: String   ,         
    date_of_birth:DOB
  ):String
  
  updateUser(
    id: String,
    name: String,
    email: EmailAddress,
    password:String,
    phone: PhoneNumber,
    address: String   ,         
    date_of_birth:DOB
  ):String

  deleteUser(
    id: String
  ):String

  }
`;

export default graphUserSchema;
