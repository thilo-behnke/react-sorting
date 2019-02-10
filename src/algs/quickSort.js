export const quickSort = list => {
   const pivot = list && list.length ? list[0] : undefined;

   if (pivot !== undefined) {
      const [head, ...tail] = list;
      const smaller = tail.filter(a => a < pivot);
      const bigger = tail.filter(a => a >= pivot);
      return [...quickSort(smaller), pivot, ...quickSort(bigger)].flat();
   } else {
      return [];
   }
};
export default quickSort;
