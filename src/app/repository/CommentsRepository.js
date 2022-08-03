const CommentsSchema = require('../schema/CommentsSchema')

class CommentsRepository {
   async create(id_post, body) {
        return await CommentsSchema.create(id_post, body)
    }
    async listComment(payload) {
        const paginateFields = {
          totalDocs: "total",
          docs: "Comments",
          page: "offsets",
          nextPage: false,
          prevPage: false,
          pagingCounter: "false",
          meta: false,
          hasPrevPage: false,
          hasNextPage: false,
          limit: "limit"
        };
        const options = {
          page: 0,
          limit: 20,
          customLabels: paginateFields,
        };
        return CommentsSchema.paginate(payload, options, {})
      }
      async updateComment(id, body) {
        return CommentsSchema.findByIdAndUpdate(id, body)
      }
      async getByIdComment(id) {
        return CommentsSchema.findById({_id: id})
    }
    async deleteComment(payload) {
        return CommentsSchema.findByIdAndDelete(payload);
      }
}
module.exports = new CommentsRepository()