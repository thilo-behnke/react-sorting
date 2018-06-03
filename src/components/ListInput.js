import React, {Component} from 'react';
import Input from "@material-ui/core/es/Input/Input";

class ListInput extends Component {
    render() {
        return <Input onChange={(event) =>
            this.props.alertList(event.target.value.split(',')
                .filter(x => x !== '') // filter empty entries
                .map(x => parseInt(x)))
        }/>;
    }
}

export default ListInput;