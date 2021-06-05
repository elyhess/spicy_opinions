module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER
    },
    body: {
      type: DataTypes.TEXT
    }
  }, {
    timestamps: true
  });

  Article.associate = models => {
    Article.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })

    Article.hasMany(models.Comment, {
      foreignKey: "articleId"
    })
  };

  return Article;
};