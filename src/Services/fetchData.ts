import axios from 'axios';

export const fetchData = async (url: string, callback: Function) => {
  let result = await axios.get(url);
  callback(result.data);
};
