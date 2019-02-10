import { head, isEmpty, tail } from 'ramda';

export function bubbleSort(list) {
   const inner = function(elem, rest) {
      return [elem, ...rest]; // TODO: Can this work functionally?
   };
   const [head, ...tail] = list;

   return isEmpty(list.length) ? list : inner(head, tail);
}

export default bubbleSort;
