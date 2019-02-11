import { curry as _curry } from 'lodash';

export const measureExecutionTimeWrapper = _curry((fun, args) => {
   const tBefore = Date.now();
   console.log(fun, args);
   const r = fun(args);
   const tAfter = Date.now();
   return [r, tAfter - tBefore];
});
