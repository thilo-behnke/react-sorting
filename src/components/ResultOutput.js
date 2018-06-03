import React, {Component} from 'react';

class ResultOutput extends Component {
    render() {
        return <div>Result: {this.props.res.join(', ')}</div>;
    }
}

export default ResultOutput;