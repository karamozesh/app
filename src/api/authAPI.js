import axios from 'axios';
import {
  API_LOGIN,
  API_REGISTER,
} from './configAPI';

export const loginByUsernamePass = async (
  username,
  password,
) => {
  const response = await axios.post(
    API_LOGIN,
    { username, password },
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.data;

  return data;
};

export const registerByUsernamePass = async (
  username,
  email,
  password,
  password_confirm,
) => {
  try {
    const response = await axios.post(
      API_REGISTER,
      {
        username,
        email,
        password,
        password_confirm,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await response.data;
    return data;
  } catch (error) {
    return 'error';
  }
};
