import axios from "axios";

export const getData = async (path) => {
  const { data } = await axios.get(`${path}`);
  return data;
};
