import axios from 'axios';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getMenu() {
  try {
    const response = await api.get('/menu');
    return response.data.data;
  } catch (error) {
    throw Error('Failed getting menu');
  }
}

export async function getOrder(id) {
  try {
    const response = await api.get(`/order/${id}`);
    return response.data.data;
  } catch (error) {
    throw Error(`Couldn't find order #${id}`);
  }
}

export async function createOrder(newOrder) {
  try {
    const response = await api.post('/order', newOrder);
    return response.data.data;
  } catch (error) {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    await api.patch(`/order/${id}`, updateObj);
  } catch (error) {
    throw Error('Failed updating your order');
  }
}
