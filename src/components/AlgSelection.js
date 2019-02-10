import Button from '@material-ui/core/es/Button/Button';
import React from 'react';
import styled from 'styled-components';

import { SORTING_ALGS } from '../App';

const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 1em;
   grid-row-gap: 1em;
`;

export const AlgSelection = ({ active, alertButton }) => (
   <Container>
      <Button
         variant="contained"
         color={active === SORTING_ALGS.MERGE_JS && 'secondary'}
         onClick={() => alertButton(SORTING_ALGS.MERGE_JS)}
      >
         MergeSort in JS
      </Button>
      <Button
         variant="contained"
         color={active === SORTING_ALGS.QUICK_JS && 'secondary'}
         onClick={() => alertButton(SORTING_ALGS.QUICK_JS)}
      >
         QuickSort in JS
      </Button>
      <Button
         variant="contained"
         disabled
         color={active === SORTING_ALGS.BUBBLE_JS && 'secondary'}
         onClick={() => alertButton(SORTING_ALGS.BUBBLE_JS)}
      >
         BubbleSort
      </Button>
      <Button
         variant="contained"
         color={active === SORTING_ALGS.MERGE_RAMDA && 'secondary'}
         onClick={() => alertButton(SORTING_ALGS.MERGE_RAMDA)}
      >
         MergeSort in Ramda
      </Button>
      <Button
         variant="contained"
         color={active === SORTING_ALGS.QUICK_RAMDA && 'secondary'}
         onClick={() => alertButton(SORTING_ALGS.QUICK_RAMDA)}
      >
         QuickSort in Ramda
      </Button>
      <Button
         variant="contained"
         disabled
         color={active === SORTING_ALGS.BUBBLE_RAMDA && 'secondary'}
         onClick={() => alertButton(SORTING_ALGS.BUBBLE_RAMDA)}
      >
         BubbleSort in Ramda
      </Button>
   </Container>
);

export default AlgSelection;
