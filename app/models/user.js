import bcrypt from 'bcryptjs'

export default (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    id: {
      type:           DataTypes.UUID,
      primaryKey:     true,
      defaultValue:   DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password_digest: {
      type: DataTypes.STRING
    }

  }, {

    underscored: true,

    instanceMethods: {

      isPasswordValid: function(password) {
        return password == this.password_digest
      },

      isRegistrationComplete: function() {
        return !!this.name && !!this.email && !!this.password
      }

    }

  })

  return User
}
