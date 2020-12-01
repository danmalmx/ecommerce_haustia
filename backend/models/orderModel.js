import mongoose from 'mongoose'

const orderScehma = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    oderItems: [
        {
            name: {type: String, required: true},
            qty: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
            name: {type: String, required: true},
        }
    ],
    shippingAdress: {
        address: {type: String, required: true,},
        city: {type: String, required: true,},
        postalCode: {type: String, required: true,},
        country: {type: String, required: true,},
    },
    paymentMethod: {
        type: String, 
        required: true,
    },
    paymentResult: {
        id: {type: String}, 
        status: {type: String}, 
        update_time: {type: String}, 
        email_address: {type: String}, 
    },
    taxPrice: {
        type: number, 
        required: true, 
        default: 0.0,
    },
    shippingPrice: {
        type: number, 
        required: true, 
        default: 0.0,
    },
    totalPrice: {
        type: number, 
        required: true, 
        default: 0.0,
    },
    isPaid: {
        type: Boolean, 
    },
    isDelivered: {
        type: Boolean, 
        required: true,
        default: false,
    },
    delieveredAt: {
        type: Date, 
    },
}, {
    timestamps: true,
})

const Order = mongoose.model('order', orderScehma);

export default Order;
