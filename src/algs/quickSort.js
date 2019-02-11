export const quickSort = list => {
   const [pivot, ...tail] = list;

   if (pivot !== undefined) {
      const smaller = tail.filter(a => a < pivot);
      const bigger = tail.filter(a => a >= pivot);
      return [...quickSort(smaller), pivot, ...quickSort(bigger)].flat();
   } else {
      return [];
   }
};
export default quickSort;
