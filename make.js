const make = (...args) => {
    if (typeof args[0] === 'function') {
      return args.slice(1).reduce((a, b) => a + b);
    } else {
      const nextMake = (...nextArgs) => make(...[...nextArgs, ...args]);
      return nextMake;
    }
}

console.log(make(15)(34, 21, 666)(41)(sum)); // return 777

function sum(a, b) {
    return a + b;
}