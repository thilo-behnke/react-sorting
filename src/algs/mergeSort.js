import {head, tail} from 'ramda';

const merge = function (list1, list2, acc) {

    const head1 = head(list1);
    const head2 = head(list2);

    if (head1 !== undefined && head2 !== undefined) {
        const b = head1 < head2;
        return merge(b ? tail(list1) : list1, b ? list2 : tail(list2), acc.concat(b ? head1 : head2));
    } else {
        return acc.concat(list1, list2);
    }

};

export function mergeSort(list) {
    const middle = list.length / 2;
    return list.length <= 1
        ? list
        : merge(mergeSort(list.slice(0, middle)), mergeSort(list.slice(middle)), []);
}

export default mergeSort;