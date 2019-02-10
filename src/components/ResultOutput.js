import { CircularProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const TimeResult = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-start;
   margin: 1em 0;
`;
const Result = styled.div`
   width: 100%;
   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: flex-start;
   margin: 1em 0;
`;

const ResultNumbers = styled.div`
   text-align: justify;
`;

export const ResultOutput = ({ res, time, loading = false }) =>
   loading ? (
      <CircularProgress />
   ) : (
      !!res.length && (
         <div>
            <TimeResult>
               <span>Numbers to be sorted:</span>
               <span>{res.length}</span>
            </TimeResult>
            <TimeResult>
               <span>Time needed for sorting (in ms):</span>
               <span>{time}</span>
            </TimeResult>
            <Result>
               <span>Sorted Output:</span>
               <ResultNumbers>{res.join(', ')}</ResultNumbers>
            </Result>
         </div>
      )
   );
export default ResultOutput;
