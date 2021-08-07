const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const books = [
    {id:"1",name:"gdhjklkjhgfghj", genre:"dfghgf"},
    {id:"4",name:"gdhjklkjhgfghj", genre:"fghjkloiuyt"},
    {id:"6",name:"apple bird", genre:"rtyuiiuyt"},
];

const BookType = new GraphQLObjectType({
    name:"Book",
    fields:() => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields :{
        book:{
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(books, {id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})