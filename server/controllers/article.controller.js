const {Sequelize} = require("sequelize");
const Article = require("../models").Article;
const Comment = require("../models").Comment;

exports.getArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findOne({where: {id}, include: {model: Comment}})
    if (!article) {
      return res.status(404).send({message: `Article with id ${id} not found.`})
    }
    return res.send(article)
  } catch (error) {
    return res.status(400).send({message: "Must enter a valid id"});
  }
}

exports.getArticles = async (req, res) => {
  const articles = await Article.findAll({
    order: [
      ['createdAt', 'DESC']
    ],
    include: [
      {
        as: 'Comments',
        model: Comment,
        attributes: [], // empty array is important here!
      },
    ],
    attributes: [
      'id', 'title', 'body', 'author', 'userId', 'createdAt', 'updatedAt',
      [Sequelize.fn("COUNT", Sequelize.col("Comments.id")), "commentCount"]
    ],
    group : ['Article.id'], // group only by parent.id here!
  });

  if (!articles.length) {
    return res.status(400).send({message: "No articles found."});
  }

  return res.send(articles)
}

exports.createArticle = async (req, res) => {
  const { userId, author, title, body } = req.body;
  console.log(req.body)

  if (!userId || !title || !body || !author) {
    return res.status(404).send({message: "Must include userId, title and body in request."})
  }

  try {
    let newArticle = await Article.create({userId, title, body, author});
    return res.send(newArticle)
  } catch (error) {
    return res.status(400).send({message: `Error ${error.message}`})
  }
}

exports.updateArticle = async (req, res) => {
  const { id } = req.params;
  const { body, title } = req.body;
  const article = await Article.findOne({where: {id}})

  if (!article) {
    return res.status(400).send({message: `Article with id ${id} not found.`})
  }

  if (!body || !title) {
    return res.status(400).send({message: "Title and body must be provided"})
  }

  try {
    article.title = title
    article.body = body
    article.save();
    return res.status(201).send({message: "Article update successfully."})
  } catch (error) {
    return res.status(400).send({message: `Error ${error.message}`})
  }
}

exports.deleteArticle = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findOne({where: { id }})

  if (!article) {
    return res.status(400).send({message: `Article with id ${id} not found.`})
  }

  try {
    await article.destroy();
    return res.send({message: "Article has been deleted"});
  } catch(err) {
    return res.status(500).send({message: `Error ${err.message}`});
  }
}