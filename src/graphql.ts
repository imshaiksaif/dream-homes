import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLID, GraphQLString, GraphQLSchema } from 'graphql';

const Listing = new GraphQLObjectType({
  name: 'Listing',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLID) },
    image: { type: GraphQLNonNull(GraphQLID) },
    address: { type: GraphQLNonNull(GraphQLID) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numOfGuests: { type: GraphQLNonNull(GraphQLInt) },
    numOfBeds: { type: GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLNonNull(GraphQLInt) },
  }
})


const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLList(Listing),
      resolve: () => 'Hello from the Query'
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello from the Mutation'
    }
  }
});

export const schema = new GraphQLSchema({query, mutation});