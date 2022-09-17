import axios from 'axios';

const BASE_URL = 'https://63204070e3bdd81d8ef5e7e7.mockapi.io/api/contacts';
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export async function getContacts() {
  const url = `${BASE_URL}`;

  const { data } = await axios.get(url);
  return data;
}

export async function addContact(data) {
  const url = `${BASE_URL}`;

  const { data: result } = await axios.post(url, data);
  return result;
}

export async function removeContact(id) {
  const url = `${BASE_URL}/${id}`;

  const { data: result } = await axios.delete(url);
  return result;
}
