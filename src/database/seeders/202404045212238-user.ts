import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('schedules', [
      {
        email: "joao123@example.com",
        scheduleDateTime: '2024-04-10 14:30:00',
      },
      {
        email: "maria_456@hotmail.com",
        scheduleDateTime: '2024-04-20 10:30:00',
      },
      {
        email: "pedro-789@gmail.com",
        scheduleDateTime: '2024-04-30 09:00:00',
      },

    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('schedules', {}, {});
  },
};
