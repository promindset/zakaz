import { DataTypes, QueryInterface } from 'sequelize'

export async function up(queryInterface: QueryInterface) {
  const { sequelize } = queryInterface

  try {
    await sequelize.transaction(async () => {
      await queryInterface.createTable(
        'User',
        {
          Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },

          Email: {
            type: DataTypes.STRING(128),
            allowNull: false
          },

          Username: {
            type: DataTypes.STRING(128),
            allowNull: false
          },

          FirstName: {
            type: DataTypes.STRING(128),
            allowNull: false
          },

          LastName: {
            type: DataTypes.STRING(128),
            allowNull: true
          },

          Password: {
            type: DataTypes.STRING(64),
            allowNull: true
          }
        },
        {
          charset: 'utf8',
          collate: 'utf8_general_ci'
        }
      )
    })
  } catch (err) {
    console.error('Error: ', err)
    throw err
  }
}

export async function down(queryInterface: QueryInterface) {
  const { sequelize } = queryInterface

  try {
    await sequelize.transaction(async () => {
      await queryInterface.dropTable('User')
    })
  } catch (err) {
    console.error('Error: ', err)
    throw err
  }
}
