export function LOG_IF_DEV(...args: any[]) {
  if (__DEV__) {
    console.log(...args);
  }
}
