import moment, { Moment } from 'moment';

const calculateTime = (minutes: number) => {
  let timeAgo: string = '';
  if (minutes < 60) {
    timeAgo = `${Math.trunc(minutes)} Minutes`;
  } else if (minutes > 60 && minutes < 1440) {
    timeAgo = `${Math.trunc(minutes / 60)} Hours`;
  } else {
    timeAgo = `${Math.trunc(minutes / 60 / 24)} Days`;
  }

  return `${timeAgo} ago`;
};

export const getTimeAgo = (utcValue: number) => {
  const postDate: Moment = moment.utc(utcValue * 1000);
  const currentDate: Moment = moment();
  const timeAgo: number = currentDate.diff(postDate, 'minute');

  return calculateTime(timeAgo);
};

export const getDate = (utcValue: number) => {
  return moment.utc(utcValue * 1000).toLocaleString();
};
