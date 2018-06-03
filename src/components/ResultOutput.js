import React, {Component} from 'react';
import mergeSort from '../algs/mergeSort'
import quickSort from '../algs/quickSort'


class ResultOutput extends Component {
    render() {

        console.log(quickSort([1]))


        let res = [];

        if (this.props.mode === 'merge') {
            res = mergeSort(this.props.list);
        } else if (this.props.mode === 'quick'){
            res = quickSort(this.props.list);
        }

        return <div>Result: {res.join(', ')}</div>;
    }
}

export default ResultOutput;