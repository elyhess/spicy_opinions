const Article = require("../models").Article;
const Comment = require("../models").Comment;

exports.createComment = async (req, res) => {
  const { author, body, articleId } = req.body;

  if (!author || !body || !articleId) {
    return res.status(400).send({message: "Author, body, and articleId are required."})
  }

  const article = await Article.findOne({where: {id: articleId}})

  if (!article) {
    return res.status(400).send({message: `Article with id ${articleId} not found.`})
  }

  try {
    let newComment = await Comment.create({author, articleId, body});
    return res.status(201).send(newComment)
  } catch (error) {
    return res.status(400).send({message: `Error ${error.message}`})
  }
}
