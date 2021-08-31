import { sayHello, smartHello } from './core';
import { fiboSeries, isPrime } from './mini-math';

test('text content', async () => {
  let data = '';
  await smartHello('fra').then(r => {data = r;});
  expect(data).toBe('Hi fra');
});

test('test length', async () => {
  sayHello('fra').then(r => expect(r).toHaveLength(3));
});

test('test isPrime', async () => {
  let val = isPrime(7);
  expect(val).toBeTruthy();
});