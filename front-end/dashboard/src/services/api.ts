import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com'; // Replace with your actual API URL

export const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const getUserDetails = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};