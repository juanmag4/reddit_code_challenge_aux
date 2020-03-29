import axios from 'axios';

export const fetchData = async (url: string, callback: Function) => {
  const result = await axios.get(url);
  callback(result.data);
};

export const postImage = async (url: string, imageUrl: string, cb: Function) => {
  const body = {
    url: imageUrl
  };
  const result = await axios.post(url, body);
  cb(result.data);
};
