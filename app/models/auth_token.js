export default (sequelize, DataTypes) => {

  let AuthToken = sequelize.define('AuthToken', {

    id: {
      type:           DataTypes.UUID,
      primaryKey:     true,
      defaultValue:   DataTypes.UUIDV4
    },

    user_id: {
      type: DataTypes.UUID
    },

    provider_id: {
      type: DataTypes.STRING
    },

    provider_name: {
      type: DataTypes.STRING
    }

  }, {

    underscored: true,

    tableName: 'auth_tokens',


    classMethods: {

      associate: function(models) {
        AuthToken.belongsTo(models.User)
      }

    }


  })

  return AuthToken

}
