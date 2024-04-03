import axios from "axios";

export const getHomePage = async () => {
    const result = axios
      .get(`https://dashboard.takhawe.com/api/captains?vehicle_types=555`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return { error: error.message };
      });
    return result;
  };