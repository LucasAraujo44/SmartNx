const PostRepository = require("../repository/PostRepository")
const IdNotFound = require('../erros/idNotFound')
const badRequest = require('../erros/badRequest')

class PostService {
    async create(payload) {
        const result = await PostRepository.create(payload)
        if(!result){
          throw new badRequest(payload)
        }
        return result
    }
    async list(payload) {
        const result = await PostRepository.list(payload)
        return result
    }
    async updatePost(id, body) {
        const result = await PostRepository.updatePost(id, body)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result
      }
      async getById(id) {
        const result = await PostRepository.getById(id)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result;
      }
      async deletePost(id) {
        const result = await PostRepository.deletePost(id)
        if (!result) {
          throw new IdNotFound(id)
        }
        return result;
      }
}
module.exports = new PostService()