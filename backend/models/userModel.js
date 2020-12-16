import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userScehma = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    isAdmin: {
        type: String, 
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

userScehma.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)    
}

const User = mongoose.model('user', userScehma);

export default User;
