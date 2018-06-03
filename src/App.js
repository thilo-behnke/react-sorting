import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListInput from "./components/ListInput";
import AlgSelection from "./components/AlgSelection";
import ResultOutput from "./components/ResultOutput";
import {curry, range} from 'ramda';
import Button from "@material-ui/core/es/Button/Button";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {mode: 'merge', list: []};
    }

    generateRandomNumber(min, max, isFloat = false){
        return curry((min, max, isFloat) => {
            let range = max - min;
            let random = Math.random() * range + min;
            return isFloat ? random : Math.floor(random);
        })(min, max, isFloat);
    }

    generateRandomList(){
        return range(1,100000).map(x => this.generateRandomNumber(1, 400000));
    }

    render() {

        const that = this;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="container">
                    <div>
                        <ListInput alertList={(list) => that.setState({list})}/>
                        <AlgSelection alertButton={(mode) => that.setState({mode})}/>
                        <Button onClick={() => that.setState({list: this.generateRandomList()})}>Generate Random List</Button>
                    </div>
                    <ResultOutput list={this.state.list} mode={this.state.mode}/>
                </div>
            </div>
        );
    }
}

export default App;
