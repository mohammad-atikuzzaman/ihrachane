import axios from "axios";

export const getData = async ( path ) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
  );
  return data;  
};
