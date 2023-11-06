const { Schema , models, Types } = require('mongoose');

const moment = require('moment');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId,
        }
    },
    reactionBody: {
            type: String,
            required: true,
            maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)
 thoughtSchema.virtual('reactionCount')
 .get(function() {
    return this.reaction.length;
 })

 const Thought = models('thought', thoughtSchema);
 module.exports = Thought;