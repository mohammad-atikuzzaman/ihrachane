import axios from "axios";

export const getApi = async ( path ) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
  );
  return data;  
};
