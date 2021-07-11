export function recall(
    fn: () => Promise<void>,
    maxTries: number = 5,
    onComplete? : () => void,
    onFail? : () => void) {
  let tries = 0;
  const loop = async () => {
    console.log("Try "+ tries)
    if(tries >= maxTries)
      if(onFail) onFail();
      else throw Error(`Recall failed ${tries} times`);
    try {
      await fn();
      onComplete?.();
    }
    catch { tries++; await loop(); }
  }
}
