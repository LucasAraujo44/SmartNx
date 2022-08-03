const PostSchema = require("../schema/PostSchema")
class PostRepository {
    async create(payload) {
        return PostSchema.create(payload)
    }
    async list(payload) {
        const paginateFields = {
            totalDocs: "total",
            docs: "Person",
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
        }
        return PostSchema.paginate(payload, options, {})
    }
    async updatePost(id, body) {
        return PostSchema.findByIdAndUpdate(id, body)
    }
    async getById(id) {
        return PostSchema.findById({ _id: id });
    }
    async deletePost(payload) {
        return PostSchema.findByIdAndDelete(payload);
    }
}
module.exports = new PostRepository() 