import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString
} from 'graphql'

import db from '../models/database'

export default new GraphQLObjectType({

  name: 'User',

  fields: () => ({

    id: {
      type: GraphQLID
    },

    name: {
      type: GraphQLString
    },

    default_themes: {
      type: new GraphQLList(themeType),
      resolve: () => {
        return db.Theme.findAll({ where: { is_default: true } })
      }
    },

    themes: {
      type: new GraphQLList(themeType),
      resolve: () => {
        return null
      }
    }

  })

})


import themeType from './theme_type'
