import {
  GraphQLID,
  GraphQLList
} from 'graphql'

import { mutationWithClientMutationId } from 'graphql-relay'

export default mutationWithClientMutationId({

  name: 'AddDefaultThemesToViewer',

  inputFields: {
    themes_ids: {
      type: new GraphQLList(GraphQLID)
    }
  },

  outputFields: {
    themes: {
      type: new GraphQLList(GraphQLID),
      resolve: () => {
        return null
      }
    }
  },

  mutateAndGetPayload: ({ themes_ids }) => {
    console.log(themes_ids)
    return null
  }

})
