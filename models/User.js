module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      unique: true,
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      defaultValue: null,
    }
  }, {
    classMethods: {
      associate: function() {}
    }
  });
  return User;
};