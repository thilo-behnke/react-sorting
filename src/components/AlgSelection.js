import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";

class AlgSelection extends Component {
    render() {
        return <div>
            <Button onClick={() => this.props.alertButton('merge')}>MergeSort</Button>
            <Button onClick={() => this.props.alertButton('quick')}>QuickSort</Button>
        </div>;
    }
}

export default AlgSelection;