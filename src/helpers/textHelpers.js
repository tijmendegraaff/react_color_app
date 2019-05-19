const splitOnUppercase = (string) => {
  const newString = string.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  return newString;
};

export default splitOnUppercase;
