module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING,
    token: DataTypes.STRING,
    facebook_id: DataTypes.STRING,
    google_id: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function() {}
    }
  });
  return User;
};