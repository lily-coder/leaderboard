export default (result = '') => {
  const startIndex = 'Game with ID: '.length - 1;
  const endIndex = result.lastIndexOf(' ');
  return result.substring(startIndex, endIndex + 1);
};
