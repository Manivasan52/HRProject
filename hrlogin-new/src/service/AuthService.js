import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your actual backend API URL

// const AuthService = {
//   login: async (username, password) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/login`, {
//         username: username,
//         password: password,
//       });

//       // Handle the response here
//       console.log(response.data);

//       // If authentication is successful, you can return the response or set a token in your app's state
//       return response.data;
//       localStorage
//     } catch (error) {
//       // Handle errors here, e.g., throw an error or display an error message to the user
//       console.error(error);
//       throw new Error('Authentication failed. Please check your username and password.');
//     }
//   },

//   // Add other service methods if needed
// };

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your API server URL
  });
  
  const ApiService = {
    login: async (username, password) => {
      try {
        const response = await axiosInstance.post('http://localhost:8080/api/login', {
          username: username,
          password: password,
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    getUsers: async () => {
        try {
          const response = await axiosInstance.get('http://localhost:8080/api/getData/5');
          return response.data; // Assuming your backend returns a list of users
        } catch (error) {
          throw error;
        }
      },
    };

export default ApiService;
