'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('VehicleTypes', [
      { name: 'Hatchback', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'SUV', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sedan', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cruiser', wheels: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('Vehicles', [
      { name: 'Toyota Corolla', vehicleTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Honda CR-V', vehicleTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'BMW 3 Series', vehicleTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Harley Davidson', vehicleTypeId: 4, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vehicles', null, {});
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  }
};