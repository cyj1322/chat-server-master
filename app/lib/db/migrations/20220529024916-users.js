'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        comment: '사용자 ID',
      },
      id: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false,
        comment: '로그인 ID',
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: '로그인 Password',
      },
      firstName: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: '이름',
      },
      lastName: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: '성',
      },
      nickName: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: '별명',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        comment: '생성 일시',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        comment: '수정 일시',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
