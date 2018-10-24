const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var fcmSchema = new Schema({
   token: {type: String, required: 'token is required'},
}, {
    timestamps: true
});

var Fcm = mongoose.model('Fcm', fcmSchema);

module.exports = Fcm