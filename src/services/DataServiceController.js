import axios from "axios";

const BASE_URL = "http://localhost:5207/api/User";

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.post['Content-Type'] = 'application/json';


// Fetch all users
export const getAllUsers = () => {
  return axios.get('/').then(response => response.data);
};

// Fetch a single user by ID
export const getUser = (id) => {
  return axios.get(`/${id}`).then(response => response.data);
};

// Create a new user
export const createUser = (user) => {
  return axios.post('/', user).then(response => response.data);
};

// Update an existing user
export const updateUser = (user) => {
  return axios.put(`/${user.id}`, user).then(response => response.data);
};

// Delete a user
export const deleteUser = (id) => {
  return axios.delete(`/${id}`).then(response => response.data);
};

