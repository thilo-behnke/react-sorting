import { concat, flatten, head, partition, pipe, reduce, tail } from 'ramda';

export const quickSortRamda = list => {
   const pivot = list ? head(list) : undefined;

   if (pivot !== undefined) {
      const rest = tail(list);
      const [smaller, bigger] = partition(a => a < pivot, rest);
      const combined = [
         quickSortRamda(smaller),
         [pivot],
         quickSortRamda(bigger),
      ];
      return pipe(
         reduce(concat, []),
         flatten
      )(combined);
   } else {
      return [];
   }
};
export default quickSortRamda;
