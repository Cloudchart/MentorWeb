import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'


import userType from './user_type'


let queryType = new GraphQLObjectType({

  name: 'Query',

  fields: () => ({

    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    },

    viewer: {
      type: userType,
      resolve: (root) => {
        return root.user
      }
    }

  })

})


export default new GraphQLSchema({
  query: queryType
})
