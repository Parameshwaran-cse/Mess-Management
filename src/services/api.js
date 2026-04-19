const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
};

export const api = {
  auth: {
    login: async (username, password) => {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      return handleResponse(response);
    },
    register: async (username, password, role) => {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role })
      });
      return handleResponse(response);
    }
  },
  menu: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/menu/all`);
      return handleResponse(response);
    },
    create: async (menuData) => {
      const response = await fetch(`${API_URL}/menu/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify(menuData)
      });
      return handleResponse(response);
    }
  },
  feedback: {
    submit: async (ratings, alternates) => {
      const response = await fetch(`${API_URL}/feedback/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify({ ratings, alternates })
      });
      return handleResponse(response);
    },
    getAll: async () => {
      const response = await fetch(`${API_URL}/feedback/all`, {
        headers: getAuthHeader()
      });
      return handleResponse(response);
    },
    getUserFeedback: async () => {
      const response = await fetch(`${API_URL}/feedback/user`, {
        headers: getAuthHeader()
      });
      return handleResponse(response);
    }
  }
};
