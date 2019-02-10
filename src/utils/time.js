export const measureExecutionTimeWrapper = (f, ...args) => {
   const tBefore = Date.now();
   const r = f(...args);
   const tAfter = Date.now();
   return Promise.resolve([r, tAfter - tBefore]);
};
