import {head, tail, partition, flatten} from 'ramda';

export function quickSort(list){

    const pivot = list ? head(list) : undefined;

    if(pivot !== undefined){
        const rest = tail(list);
        const [smaller, bigger] = partition(a => a < pivot, rest);
        return flatten([...quickSort(smaller), pivot, ...quickSort(bigger)]);
    } else {
        return [];
    }

}
export default quickSort;