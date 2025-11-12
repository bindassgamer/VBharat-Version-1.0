import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authR from './routes/authR.js';
import cors from 'cors';
import fileR from './routes/filesR.js';
import creditR from './routes/creditsR.js';
// import categoryRoutes from './routes/categoryR.js';
// import productsR from './routes/productR.js';
// import orderRoutes from './routes/orderR.js'; // Import order routes
import settingsRoutes from './routes/settingsR.js'; // Import settings routes
// import reportRoutes from './routes/reportR.js'; // Import report routes
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
// import revenueRoutes from './routes/revenueRoutes.js';
// import organizationRoutes from './routes/organisationR.js';


dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static files from the "uploads" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// organizationRoutes
// app.use('/api/v1/organization', organizationRoutes);

// Routes
app.use('/api/v1/auth', authR);
app.use('/api/v1/file', fileR);
app.use('/api/v1/credit', creditR);
// app.use('/api/v1/category', categoryRoutes);
// app.use('/api/v1/product', productsR); // Fixed route path
// app.use('/api/v1/order', orderRoutes); // Add order routes
app.use('/api/v1/settings', settingsRoutes); // Add settings routes
// app.use('/api/v1/report', reportRoutes); // Add report routes
// app.use('/api', revenueRoutes);

app.use(express.static(path.join(__dirname, 'app_sem5/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'app_sem5/build', 'index.html'));
// });

app.get('/api/restaurants', async (req, res) => {
  const { latitude, longitude } = req.query;
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=restaurant&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data); // Send the Google Places API response
  } catch (error) {
    console.error('Error fetching Google Places API:', error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} `.bgCyan.white);
});









