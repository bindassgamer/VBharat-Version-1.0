
import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  reorderLevel: { type: Number, required: true },
  status: { type: String, required: true }
});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;