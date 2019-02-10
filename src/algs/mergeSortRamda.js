import { head, isEmpty, tail } from 'ramda';

const merge = function(list1, list2, acc) {
   if (!isEmpty(list1) && !isEmpty(list2)) {
      const head1 = head(list1);
      const head2 = head(list2);
      const b = head1 < head2;
      return merge(
         b ? tail(list1) : list1,
         b ? list2 : tail(list2),
         acc.concat(b ? head1 : head2)
      );
   } else {
      return acc.concat(list1, list2);
   }
};

export const mergeSortRamda = list => {
   const middle = list.length / 2;
   return list.length <= 1
      ? list
      : merge(
           mergeSortRamda(list.slice(0, middle)),
           mergeSortRamda(list.slice(middle)),
           []
        );
};

export default mergeSortRamda;
