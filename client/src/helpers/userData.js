
import axios from "axios"



export const baseUrl="https://api-color-sage.vercel.app"
// export const baseUrl="http://localhost:3000"
export const getUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/auth/login/success`, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data? true : false)
    if (response.status === 200) {
      return response.data.user
    } else {
      throw new Error('Authentication has been failed!');
    }
  } catch (err) {
    console.log(err);
  }
};



// import axios from "axios";

// axios.defaults.withCredentials = true;

// export const baseUrl = "https://api-color-sage.vercel.app";
// // export const baseUrl="http://localhost:3000"
// export const getUser = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/auth/login/success`, {
//       withCredentials: true,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response.data);
//     if (response.status === 200) {
//       return response.data.user;
//     } else {
//       throw new Error('Authentication has been failed!');
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
