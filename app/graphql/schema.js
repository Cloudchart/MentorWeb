import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'


import userType from './user_type'

import AddDefaultThemesToViewer from './mutations/add_default_themes_to_viewer'


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


let mutationType = new GraphQLObjectType({

  name: 'Mutation',

  fields: () => ({
    addDefaultThemesToViewer: AddDefaultThemesToViewer
  })

})


export default new GraphQLSchema({
  query:      queryType,
  mutation:   mutationType
})
