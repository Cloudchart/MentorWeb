import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'

export default new GraphQLObjectType({

  name: 'Theme',

  fields: () => ({

    id: {
      type: GraphQLID
    },

    name: {
      type: GraphQLString
    },

    is_system: {
      type: GraphQLBoolean
    },

    is_default: {
      type: GraphQLBoolean
    }

  })

})
