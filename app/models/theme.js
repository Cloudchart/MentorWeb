export default (sequelize, DataTypes) => {

  let Theme = sequelize.define("Theme", {

    id: {
      type:           DataTypes.UUID,
      primaryKey:     true,
      defaultValue:   DataTypes.UUIDV4
    },

    name: {
      type: DataTypes.STRING
    },

    is_default: {
      type: DataTypes.BOOLEAN
    },

    is_system: {
      type: DataTypes.BOOLEAN
    }

  }, {

    underscored: true

  })

  return Theme

}
