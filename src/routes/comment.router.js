const CommentController = require('../app/controller/CommentsController')

module.exports = (server, routes, prefix = "/api/v1/post") => {
routes.post("/:id/comment", CommentController.create)
routes.get("/:id/comment", CommentController.listComment)
routes.put("/:id/comment/:id", CommentController.updateComment)
routes.get("/:id/comment/:id", CommentController.getByIdComment)
routes.delete("/:id/comment/:id", CommentController.deleteComment)

server.use(prefix, routes)
}