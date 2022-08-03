const CommentsRepository = require('../repository/CommentsRepository')
const IdNotFound = require('../Erros/IdNotFound')

class CommentService {
  async create(id_post, body) {
    const result = await CommentsRepository.create({ ...id_post, ...body })
    return result
  }
  async listComment(payload) {
    const result = await CommentsRepository.listComment(payload)
    return result
  }
  async updateComment(id, body) {
    const result = await CommentsRepository.updateComment(id, body);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }
  async getByIdComment(id) {
    const result = await CommentsRepository.getByIdComment(id);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }
  async deleteComment(id) {
    const result = await CommentsRepository.deleteComment(id);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }

}
module.exports = new CommentService()