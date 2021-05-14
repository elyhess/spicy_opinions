module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  User.associate = models => {
    User.hasMany(models.Article, {
      foreignKey: "userId",
    })
  };

  return User;
};