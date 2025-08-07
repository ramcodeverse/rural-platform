const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const servicesRoutes = require('./routes/services');
const productsRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');
const contactRoutes = require('./routes/contact');
const bookingsRoutes = require('./routes/bookings');
const usersRoutes = require('./routes/users');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/services', servicesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api', authRoutes);

mongoose.connect(process.env.MONGODB_URI, {})
.then(() => app.listen(5000, () => console.log('Backend started on 5000')))
.catch(err => console.log(err));