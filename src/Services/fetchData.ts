import axios from 'axios';

export const fetchData = async (url: string, callback: Function) => {
  const result = await axios.get(url);
  callback(result.data);
};
