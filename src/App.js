import './App.css';

import { Input } from '@material-ui/core';
import { curry, range } from 'ramda';
import Button from '@material-ui/core/es/Button/Button';
import React, { Component } from 'react';
import styled from 'styled-components';

import { measureExecutionTimeWrapper } from './utils/time';
import AlgSelection from './components/AlgSelection';
import ListInput from './components/ListInput';
import ResultOutput from './components/ResultOutput';
import logo from './logo.svg';
import mergeSort from './algs/mergeSort';
import mergeSortRamda from './algs/mergeSortRamda';
import quickSort from './algs/quickSort';
import quickSortRamda from './algs/quickSortRamda';

const AppContainer = styled.div`
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   text-align: center;
`;

const Container = styled.div`
   width: 50%;
   display: grid;
   grid-template-rows: max-content max-content max-content;
   grid-row-gap: 1em;
   margin-top: 3em;
`;

const InputContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 4fr 1fr 3fr 1fr;
   grid-column-gap: 1em;
`;

export const SORTING_ALGS = {
   MERGE_JS: 'MERGE_JS',
   MERGE_RAMDA: 'MERGE_RAMDA',
   QUICK_JS: 'QUICK_JS',
   QUICK_RAMDA: 'QUICK_RAMDA',
   BUBBLE_JS: 'BUBBLE_JS',
   BUBBLE_RAMDA: 'BUBBLE_RAMDA',
};

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         mode: SORTING_ALGS.MERGE_JS,
         list: [],
         nRandom: 1000,
         result: { res: [], t: undefined },
         isSorting: false,
         isGenerating: false,
      };
   }

   generateRandomNumber = (min, max, isFloat = false) =>
      curry((min, max, isFloat) => {
         const range = max - min;
         const random = Math.random() * range + min;
         return isFloat ? random : Math.floor(random);
      })(min, max, isFloat);

   generateRandomList = n => {
      this.setState({ isGenerating: true });
      new Promise(resolve => {
         const r = range(0, n).map(x => this.generateRandomNumber(1, 400000));
         return resolve(r);
      }).then(list => this.setState({ list, isGenerating: false }));
   };

   mapSortModeFun = mode => {
      switch (mode) {
         case SORTING_ALGS.MERGE_JS:
            return mergeSort;
         case SORTING_ALGS.MERGE_RAMDA:
            return mergeSortRamda;
         case SORTING_ALGS.QUICK_JS:
            return quickSort;
         case SORTING_ALGS.QUICK_RAMDA:
            return quickSortRamda;
      }
   };

   sortSelected = (mode, list) => {
      const fun = this.mapSortModeFun(mode);
      this.setState({ isSorting: true });
      measureExecutionTimeWrapper(fun, list).then(([res, t]) =>
         this.setState({ result: { res, t }, isSorting: false })
      );
   };

   render() {
      const {
         mode,
         list,
         result: { res, t },
      } = this.state;

      return (
         <AppContainer>
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">
                  Sorting algorithms implemented in functional JS
               </h1>
            </header>
            <Container>
               <InputContainer>
                  <ListInput
                     value={this.state.list}
                     alertList={list => this.setState({ list })}
                  />
                  <Button
                     variant="contained"
                     onClick={() => this.setState({ list: [] })}
                  >
                     Clear
                  </Button>
                  <Button
                     disabled={this.state.isGenerating}
                     variant="contained"
                     color="primary"
                     onClick={() => this.generateRandomList(this.state.nRandom)}
                  >
                     Generate Random List
                  </Button>
                  <Input
                     value={this.state.nRandom}
                     onChange={({ target: { value } }) =>
                        this.setState({ nRandom: parseInt(value) })
                     }
                  />
               </InputContainer>
               <AlgSelection
                  active={this.state.mode}
                  alertButton={mode => this.setState({ mode })}
               />
               <Button
                  disabled={!list.length}
                  variant="contained"
                  onClick={() => this.sortSelected(mode, list)}
               >
                  Sort!
               </Button>
               <ResultOutput
                  loading={this.state.isSorting}
                  res={res}
                  time={t}
               />
            </Container>
         </AppContainer>
      );
   }
}

export default App;
