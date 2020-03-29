import axios from 'axios';

export const fetchData = async (url: string, callback: Function, errorCallback?: Function) => {
  try {
    const result = await axios.get(url);
    callback(result.data);
  } catch (error) {
    errorCallback(error)
  }
};

export const saveImage = async (url: string, imageUrl: string, cb: Function, errorCB?: Function) => {
  const body = { url: imageUrl };
  try {
    const result = await axios.post(url, body);
    cb(result.data);
  } catch (error) {
    errorCB(error)
  }
};
