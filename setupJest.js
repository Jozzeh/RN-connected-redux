require('jest-fetch-mock').enableMocks();
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-sensitive-info', () => {
  return {
    setItem: jest.fn(),
    getItem: jest.fn(),
    deleteItem: jest.fn(),
    getAllItems: jest.fn(),
  };
});
