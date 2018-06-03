import {head, isEmpty, tail} from 'ramda';

export function bubbleSort(list) {

    const inner = function (elem, rest) {
        return [elem, ...rest]; // TODO: Can this work functionally?
    };

    return list.length <= 1 ? list : inner(head(list), tail(list));
}

export default bubbleSort;