import { Sequelize, Model, DataTypes } from 'sequelize'
import { UserAttributes } from './types'
import { sequelize } from '../../db'

export class User extends Model<UserAttributes> implements UserAttributes {
  public Id!: number

  public Email!: string
  public Username!: string

  public FirstName!: string
  public LastName!: string

  public Password!: string

  static async getById(userId: number, attributes?: Array<keyof UserAttributes>) {
    return User.findOne({
      where: {
        Id: userId
      },
      attributes
    })
  }
}

User.init(
  {
    Id: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    tableName: 'User',
    sequelize
  }
)
