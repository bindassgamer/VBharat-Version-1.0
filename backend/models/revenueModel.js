import mongoose from 'mongoose';

const revenueSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  saleTime: { type: String, required: true },
  category: { type: String, required: true }
});

const Revenue = mongoose.model('Revenue', revenueSchema);

export default Revenue;
