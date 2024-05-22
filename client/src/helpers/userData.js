import axios from "axios"

export const getUser = async () => {
  try {
    const response = await axios.get('http://localhost:3000/auth/login/success', {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data.user
    } else {
      throw new Error('Authentication has been failed!');
    }
  } catch (err) {
    console.log(err);
  }
};



