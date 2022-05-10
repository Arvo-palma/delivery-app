const NUMBER_TEN = 10;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate() < NUMBER_TEN ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() + 1 < NUMBER_TEN
    ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  return `${day}/${month}/${date.getFullYear()}`;
};

// vlw roberval time

export default formatDate;
