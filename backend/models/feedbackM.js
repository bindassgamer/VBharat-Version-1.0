
import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;