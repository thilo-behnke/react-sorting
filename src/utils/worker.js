import { isArray as _isArray } from 'lodash';

const runWork = (worker, fun, args) => {
   console.log(`(${worker})(${fun}, ${formattedArgs})`);
   const formattedArgs = _isArray(args) ? `[${args}]` : args;
   return new Worker(
      URL.createObjectURL(new Blob([`(${worker})(${fun}, ${formattedArgs})`]))
   );
};

export const runTaskInWorker = (fun, args) => {
   return new Promise(resolve => {
      console.log(fun, args);
      const worker = runWork(
         (f, a) => {
            postMessage(f(a));
         },
         fun,
         args
      );
      worker.onmessage = ({ data }) => resolve(data);
   });
};
