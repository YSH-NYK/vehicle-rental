'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      Vehicle.belongsTo(models.VehicleType, { foreignKey: 'vehicleTypeId' });
      Vehicle.hasMany(models.Booking, { foreignKey: 'vehicleId' });
    }
  }
  Vehicle.init({
    name: DataTypes.STRING,
    vehicleTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};