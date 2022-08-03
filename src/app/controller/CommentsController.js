const CommentService = require('../service/CommentsService')

class CommentController {
    async create(req, res) {
        try {
            const id_post = req.params.id
            const result = await CommentService.create({ id_post: id_post }, req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async listComment(req, res) {
        try {
            const id_post = req.params.id
            const result = await CommentService.listComment({ id_post: id_post }, req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async updateComment(req, res) {
        try {
            const result = await CommentService.updateComment(
                req.params.id,
                req.body
            );
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id was successfully Updated`,
                    },
                ],
            });
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async getByIdComment(req, res) {
        try {
            const id = req.params.id
            const result = await CommentService.getByIdComment(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async deleteComment(req, res) {
        try {
            const result = await CommentService.deleteComment(req.params.id);
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id_Comment was successfully deleted`,
                    },
                ],
            });
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
}
module.exports = new CommentController()
