const PostService = require('../service/PostService')

class PostController {
    async create(req, res) {
        try {
            const result = await PostService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async list(req, res) {
        try {
            const result = await PostService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400)
        }

    }
    async update(req, res) {
        try {
            const result = await PostService.updatePost(
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
            })
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id
            const result = await PostService.getById(id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async delete(req, res) {
        try {
            const result = await PostService.deletePost(req.params.id);
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id_Post was successfully deleted`,
                    },
                ],
            });
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
}
module.exports = new PostController()