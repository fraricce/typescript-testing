const square = (num: any) => {
  return num * 2;
}

export const sayHello = (name: string): Promise<string> => {
  const res = new Promise<string>((res, err) => {
    if (name === 'fra') {
      res('ok!');
    } else {
      err('Noooo!');
    }
    
  });
  return res;
}

export const smartHello = async (name: string) => {
  return `Hi ${name}`;
}

export default square;