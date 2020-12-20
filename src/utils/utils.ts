export const handleOps = {
  add(arr: number[]) {
    return arr[0] + arr[1];
  },
  subtract(arr: number[]) {
    return arr[0] - arr[1];
  },
  divide(arr: number[]) {
    return arr[0] / arr[1];
  },
  multiply(arr: number[]) {
    return arr[0] * arr[1];
  },
  toThePowerOf(arr: number[]) {
    return Math.pow(arr[0], arr[1]);
  },
};
