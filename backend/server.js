const express = require('express');
const cors = require('cors');
const { Sequelize, Op } = require('sequelize');
const models = require('./models');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

app.get('/api/vehicle-types', async (req, res) => {
  const { wheels } = req.query;
  const where = wheels ? { wheels } : {};
  const vehicleTypes = await models.VehicleType.findAll({ where });
  res.json(vehicleTypes);
});

app.get('/api/vehicles', async (req, res) => {
  const { vehicleTypeId } = req.query;
  const where = vehicleTypeId ? { vehicleTypeId } : {};
  const vehicles = await models.Vehicle.findAll({ where });
  res.json(vehicles);
});

app.post('/api/bookings', async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const overlappingBookings = await models.Booking.findAll({
    where: {
      vehicleId,
      [Op.or]: [
        {
          startDate: { [Op.between]: [startDate, endDate] }
        },
        {
          endDate: { [Op.between]: [startDate, endDate] }
        },
        {
          [Op.and]: [
            { startDate: { [Op.lte]: startDate } },
            { endDate: { [Op.gte]: endDate } }
          ]
        }
      ]
    }
  });

  if (overlappingBookings.length > 0) {
    return res.status(400).json({ error: 'Vehicle is already booked for the selected dates' });
  }

  const booking = await models.Booking.create({ firstName, lastName, vehicleId, startDate, endDate });
  res.json(booking);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));