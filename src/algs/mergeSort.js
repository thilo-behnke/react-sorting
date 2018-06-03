
const merge = function(list1, list2) {

    let index1 = 0, index2 = 0, res = [];

    while(list1.length > index1 && list2.length > index2){
        if (list1[index1] < list2[index2]){
            res.push(list1[index1]);
            index1++;
        } else {
            res.push(list2[index2]);
            index2++;
        }
    }

    res.push(...list1.slice(index1));
    res.push(...list2.slice(index2));
    return res;
};

export function mergeSort(list){
    const middle = list.length / 2;
    return list.length <= 1
        ? list
        : merge(mergeSort(list.slice(0, middle)), mergeSort(list.slice(middle)));
}
export default mergeSort;