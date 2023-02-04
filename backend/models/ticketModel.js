const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad', 'Android Device']
    },
    description: {
        type: String,
        required: [true, 'Please enter the details'],
    },
    status: {
        type: String,
        required: true,
        default: 'new',
        enum: ['new', 'open', 'closed']
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Ticket', ticketSchema)