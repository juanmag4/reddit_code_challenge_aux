export const calculateTime = (minutes: number) => {
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
