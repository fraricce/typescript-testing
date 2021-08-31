import square from './core';
import { fiboSeries, isPrime } from './mini-math';
import { sayHello, smartHello } from './core';
import { Observable, of, map } from 'rxjs';

console.log(square(3));
sayHello('fra').then(r => console.log(r)).catch(e => console.log(e));

(async () => {
  try {
    let res, res2;
    await smartHello('Fra').then(r => res = r);
    await smartHello('Melville').then(r => res2 = r);
    console.log(res);
    console.log(res2);
  } catch (e) {
    console.log(`exception ${e}`);
  }
})();

const emitter: Observable<number> = of(1,2,3,4);
emitter.subscribe(e => {console.log(`Here it is..${e}`)});

const pipeAggregator = emitter.pipe(map(d => { return d + 1; }), map(e => { return e + 1; }));
pipeAggregator.subscribe(k => { console.log(k) });

console.log("Fibonacci");
console.log(fiboSeries(10));

const val = 5;
console.log(`isPrime ${val}? ${isPrime(5)}`);