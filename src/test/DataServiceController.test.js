import { describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../services/DataServiceController';

const mock = new MockAdapter(axios);

describe('API client tests', () => {
  beforeEach(() => {
    mock.reset();  // Reset the mock adapter before each test
  });

  it('should fetch all users', async () => {
    const users = [{ id: 1, name: 'John Doe' }];
    mock.onGet('/').reply(200, users);
    const result = await getAllUsers();
    expect(result).toEqual(users);
  });

  it('should fetch a single user', async () => {
    const user = { id: 1, name: 'John Doe' };
    mock.onGet('/1').reply(200, user);
    const result = await getUser(1);
    expect(result).toEqual(user);
  });

  it('should create a user', async () => {
    const newUser = { name: 'Jane Doe' };
    mock.onPost('/').reply(201, newUser);
    const result = await createUser(newUser);
    expect(result).toEqual(newUser);
  });

  it('should update a user', async () => {
    const updatedUser = { id: 1, name: 'John Smith' };
    mock.onPut('/1').reply(200, updatedUser);
    const result = await updateUser(updatedUser);
    expect(result).toEqual(updatedUser);
  });

  it('should delete a user', async () => {
    mock.onDelete('/1').reply(200, { message: 'User deleted' });
    const result = await deleteUser(1);
    expect(result).toEqual({ message: 'User deleted' });
  });
});