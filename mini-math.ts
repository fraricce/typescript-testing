export const fiboSeries = (num: number,  total = [1, 1]): Array<number> => {
  const n = total[total.length - 1] + total[total.length - 2];
  if(n > num){
    return total;
  }
  total.push(n);
  return fiboSeries(num, total);
}

export const isPrime = (n: number):boolean => {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let a = 2; a < n; a++) {
      if (n % a === 0) return false;
  }
  return true;
}

export default fiboSeries;