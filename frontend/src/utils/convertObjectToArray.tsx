/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertObjectToArray = (obj: any): any[] => {
  return Object.entries(obj).map(([key, value]) => ({key, value}));
};
