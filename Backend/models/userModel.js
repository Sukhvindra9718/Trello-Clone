const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    workspaces: {
        type: Array,
        default: []
    },
    boards: {
        type: Array,
        default: []
    },
    lists: {
        type: Array,
        default: []
    },
    cards: {
        type: Array,
        default: []
    },
    boardOrder: {
        type: Array,
        default: []
    },
    listOrder: {
        type: Array,
        default: []
    },
    cardOrder: {
        type: Array,
        default: []
    },
    cardComments: {
        type: Array,
        default: []
    },
    cardLabels: {
        type: Array,
        default: []
    },
    cardMembers: {
        type: Array,
        default: []
    },
    cardDueDates: {
        type: Array,
        default: []
    },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare Password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model('User', userSchema);