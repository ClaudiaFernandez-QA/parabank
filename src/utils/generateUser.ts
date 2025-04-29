import { User } from '../data/user';

export function generateNewUser(): User {
  const randonNumber = Math.floor(Math.random() * 1000);
  return {
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    address: 'Dracarys 123',
    city: 'Dragonstone',
    state: 'Crownlands',
    zipCode: '12345',
    phone: '1130556632',
    ssn: '1212121212',
    username: `user_${randonNumber}`,
    password: 'TestPassword123'
  };
}


