const localString = (number: number) => {
  if (isNaN(number)) return '';

  return number.toLocaleString();
};

export { localString };
