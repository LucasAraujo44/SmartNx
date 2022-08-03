const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PostSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        data: {
            type: String,
            required: true,
            trim: true
        },
         email: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true,
        },
    })
PostSchema.virtual("id_post").get(function () {
    return this._id;
})
PostSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id, delete converted.id;
    },
})

PostSchema.plugin(mongoosePaginate)
const Post = mongoose.model("Post", PostSchema)

module.exports = Post