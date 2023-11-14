// test-utils.ts


// https://jess.sh/blog/stop-writing-next-tick
// Here’s the desired API, which looks pretty identical to Testing Library’s waitFor

export const retry = (assertion: any, { interval = 20, timeout = 1000 } = {}) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
  
      const tryAgain = () => {
        setTimeout(() => {
          try {
            resolve(assertion());
          } catch (err) {
            Date.now() - startTime > timeout ? reject(err) : tryAgain();
          }
        }, interval);
      };
  
      tryAgain();
    });
  };
  