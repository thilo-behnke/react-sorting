import { identity, trim } from 'ramda';
import Input from '@material-ui/core/es/Input/Input';
import React from 'react';

export const ListInput = ({ alertList, value }) => (
   <Input
      placeholder={'Enter numbers to be sorted, e.g.: 34,5,2,55'}
      value={value}
      onChange={({ target: { value } }) =>
         alertList(
            value
               .split(',')
               .map(trim)
               .filter(identity) // filter empty entries
               .map(x => parseInt(x))
         )
      }
   />
);

export default ListInput;
