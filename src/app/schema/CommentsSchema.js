const mongoose = require ('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CommentsSchema = new mongoose.Schema(
    {
        id_post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true
        },
        comments: {
            type: String,
            required: true,
        }
})
CommentsSchema.plugin(mongoosePaginate)
const Comments = mongoose.model("Comments", CommentsSchema)
module.exports = Comments