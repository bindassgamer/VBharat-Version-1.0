import mongoose from 'mongoose';

const creditSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  subject: { type: String, required: true },
  points: { type: Number, required: true },
});

export default mongoose.model('Credit', creditSchema);