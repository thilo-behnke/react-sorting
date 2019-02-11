export function mergeSort(list) {
   const merge = (list1, list2, acc) => {
      if (!!list1.length && !!list2.length) {
         const head1 = list1[0];
         const tail1 = list1.slice(1);
         const head2 = list2[0];
         const tail2 = list2.slice(1);
         // TODO: Check how to use babel stuff with web workers
         // const [head1, ...tail1] = list1;
         // const [head2, ...tail2] = list2;
         const b = head1 < head2;
         return merge(
            b ? tail1 : list1,
            b ? list2 : tail2,
            acc.concat(b ? head1 : head2)
         );
      } else {
         return acc.concat(list1, list2);
      }
   };
   const middle = list.length / 2;
   return list.length <= 1
      ? list
      : merge(
           mergeSort(list.slice(0, middle)), // Sort left
           mergeSort(list.slice(middle)), // Sort right
           []
        );
}

export default mergeSort;
