module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    author: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    articleId: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: true
  });

  Comment.associate = models => {
    Comment.belongsTo(models.Article, {
      foreignKey: "articleId",
      onDelete: "CASCADE"
    })
  };
  return Comment;
};