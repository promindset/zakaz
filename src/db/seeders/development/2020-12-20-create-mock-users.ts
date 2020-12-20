import { QueryInterface, Sequelize } from 'sequelize'
import { User, UserAttributes } from '../../models/User'

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
  const users: UserAttributes[] = [
    {
      Email: 'fawzinajjar@test.com',
      Username: 'xes3x',
      FirstName: 'fauzi',
      LastName: 'nazhzhar',
      Password: 'EE8D8728F435FD550F83852AABAB5234CE1DA528'
    },
    {
      Email: 'assaadnajjar@test.com',
      Username: 'rajjix',
      FirstName: 'assaad',
      LastName: 'najjar',
      Password: 'EE8D8728F435FD550F83852AABAB5234CE1DA528'
    }
  ]
  await queryInterface.bulkInsert('User', users, {})
}
