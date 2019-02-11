export const generateRandomList = n => {
   const generateRandomNumber = (min, max, isFloat = false) => {
      const range = max - min;
      const random = Math.random() * range + min;
      return isFloat ? random : Math.floor(random);
   };
   return Array.from(Array(n).keys()).map(x => generateRandomNumber(1, 400000));
};
