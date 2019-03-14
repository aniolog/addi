export const calculateRandomWithinRange =(lowerBound, upperBound) => {
  return Math.floor(Math.random() * (+upperBound - +lowerBound))
};