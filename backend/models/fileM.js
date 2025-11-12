import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    name: { type: String, required: true },
    status: { type: String, enum: ['review', 'confirmed'], required: true },
    path: { type: String, required: true },
  });
export default mongoose.model('File', fileSchema);