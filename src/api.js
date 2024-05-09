import axios from "axios";

const baseUrl = "./tasks.json"; // Change this to match your server URL

const tasksApi = {
  getAll: () => {
    return axios.get(baseUrl); // Return the promise returned by axios.get
  },
};


export default tasksApi;
