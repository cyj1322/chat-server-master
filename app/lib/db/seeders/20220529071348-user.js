'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Op } = require('sequelize');

const tableName = 'Users';

module.exports = {
  up: async (queryInterface) => {
    const users = [];

    for (let i = 0; i < 10; i++) {
      users.push({
        id: `testUser${i}`,
        password: 'password',
        firstName: `user${i}`,
        lastName: 'test',
        nickName: `testNickName${i}`,
      });
    }

    return queryInterface.bulkInsert(tableName, users, {});
  },

  down: (queryInterface) =>
    queryInterface.bulkDelete(tableName, { id: { [Op.like]: 'testUser' } }, {}),
};
